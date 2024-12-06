import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ServiceService } from '../../service/service.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-create-user-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './create-user-page.component.html',
  styleUrls: []
})
export class CreateUserPageComponent {
  @Output() userCreated = new EventEmitter<any>();
  userForm: FormGroup;
  formErrors: { [key: string]: string } = {};

  constructor(private fb: FormBuilder, private serviceService: ServiceService) {
    this.userForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      correo: ['', [Validators.required, Validators.email]],
      fechaNacimiento: ['', [Validators.required, this.dateValidator]],
      genero: ['', Validators.required]
    });

    this.userForm.valueChanges.subscribe(() => this.onValueChanged());
  }

  dateValidator(control: AbstractControl): { [key: string]: any } | null {
    const value = control.value;
    if (!value) return null;
    const currentDate = new Date();
    const inputDate = new Date(value);
    return inputDate < currentDate ? null : { invalidDate: true };
  }

  onValueChanged(): void {
    if (!this.userForm) return;
    const form = this.userForm;

    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        this.formErrors[field] = '';
        const control = form.get(field);

        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  validationMessages: { [key: string]: { [key: string]: string } } = {
    nombre: {
      required: 'Name is required.',
      minlength: 'Name must be at least 3 characters long.',
      maxlength: 'Name cannot be more than 20 characters long.'
    },
    correo: {
      required: 'Email is required.',
      email: 'Invalid email format.'
    },
    fechaNacimiento: {
      required: 'Date of Birth is required.',
      invalidDate: 'Date of Birth must be in the past.'
    },
    genero: {
      required: 'Gender is required.'
    }
  };

  onSubmit(): void {
    if (this.userForm.valid) {
      console.log('Form data:', this.userForm.value); // Log the form data
      this.serviceService.postData(this.userForm.value).then(
        (response) => {
          console.log('User created successfully', response);
          alert('User created successfully');
          this.userCreated.emit(this.userForm.value);
          this.userForm.reset();
        },
        (error) => {
          console.error('Error creating user', error);
          alert('Error creating user: ' + error.message);
        }
      );
    } else {
      this.onValueChanged(); 
      alert('Form is invalid. Please check the fields and try again.');
    }
  }
}
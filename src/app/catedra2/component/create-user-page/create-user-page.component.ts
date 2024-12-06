import { Component } from '@angular/core';
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
  userForm: FormGroup;
  formErrors: { [key: string]: string } = {};

  constructor(private fb: FormBuilder, private serviceService: ServiceService) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: ['', [Validators.required, this.dateValidator]],
      gender: ['', Validators.required]
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
    name: {
      required: 'Name is required.',
      minlength: 'Name must be at least 3 characters long.',
      maxlength: 'Name cannot be more than 20 characters long.'
    },
    email: {
      required: 'Email is required.',
      email: 'Invalid email format.'
    },
    dateOfBirth: {
      required: 'Date of Birth is required.',
      invalidDate: 'Date of Birth must be in the past.'
    },
    gender: {
      required: 'Gender is required.'
    }
  };

  onSubmit(): void {
    if (this.userForm.valid) {
      this.serviceService.postData(this.userForm.value).then(
        (response) => {
          console.log('User created successfully', response);
          alert('User created successfully');
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
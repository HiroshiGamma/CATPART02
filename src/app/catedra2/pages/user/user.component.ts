import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { ResponseAPIUser } from '../../interface/responseApiUser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CreateUserPageComponent } from '../../component/create-user-page/create-user-page.component';
import { UserListPageComponent } from '../../component/user-list-page/user-list-page.component';

@Component({
  selector: 'app-user',
  standalone: true,
  providers: [ServiceService],
  imports: [CommonModule, HttpClientModule, CreateUserPageComponent, UserListPageComponent], 
  templateUrl: './user.component.html',
  styleUrls: []
})
export class UserComponent implements OnInit {
  showCreateUserForm: boolean = false;
  showUserList: boolean = false;

  constructor(private service: ServiceService, private router: Router) {}

  ngOnInit(): void {}

  toggleCreateUserForm(): void {
    this.showCreateUserForm = !this.showCreateUserForm;
  }

  toggleUserList(): void {
    this.showUserList = !this.showUserList;
  }

  onUserCreated(user: ResponseAPIUser): void {
    this.showCreateUserForm = false;
  }

  navigateToCreateUser(): void {
    this.router.navigate(['/create-user']);
  }
}

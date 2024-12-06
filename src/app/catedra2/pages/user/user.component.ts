import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { ResponseAPIUser } from '../../interface/responseApiUser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  providers: [ServiceService],
  imports: [CommonModule, HttpClientModule], 
  templateUrl: './user.component.html',
  styleUrls: []
})
export class UserComponent implements OnInit {
  users: ResponseAPIUser[] = []; 
  showUserList: boolean = false;

  constructor(private service: ServiceService, private router: Router) {} 

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.service.getAllUsers().then(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );
  }

  toggleUserList(): void {
    this.showUserList = !this.showUserList;
  }

  navigateToCreateUser() {
    this.router.navigate(['/create-user']);
  }
}

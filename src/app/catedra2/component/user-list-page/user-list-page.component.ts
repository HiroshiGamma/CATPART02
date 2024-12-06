import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { ResponseAPIUser } from '../../interface/responseApiUser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user-list-page',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './user-list-page.component.html',
  styleUrls: []
})
export class UserListPageComponent implements OnInit {
  users: ResponseAPIUser[] = [];

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.serviceService.getAllUsers().then(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );
  }
}
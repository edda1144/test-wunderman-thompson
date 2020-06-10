import { User } from '../../model/user.model';
import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService]
})
export class UserListComponent implements OnInit {
  users: Observable<User[]>;
  constructor(private userService: UserService,
      private router: Router ) { }

  ngOnInit() {
    this.loadUsers();
  }

  private loadUsers(): void {
    this.users = this.userService.getUsers();
  }

}

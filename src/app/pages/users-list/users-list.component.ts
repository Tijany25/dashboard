import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/services/user.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[] = [];
  loading = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers();
    this.userService.userList
    this.fetchUsers();
  }

  fetchUsers() {
    this.loading = true;

    this.userService.userList.subscribe(users => {
      this.users = users;

      this.loading = false;
    });
  }

}

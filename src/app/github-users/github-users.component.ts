import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.css']
})
export class GithubUsersComponent implements OnInit {

  search: string = "";
  users: any[] = [];
  oldUsers: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser() {
    this.userService.getUser()
        .subscribe((response: any[]) => {
         this.oldUsers = this.users = response
        });
  }

  searchUsers() {
   
    if(this.search == "") {
      this.users = this.oldUsers;
      return;
    }

    this.userService.searchUser(this.search)
        .subscribe((response: any[]) => this.users = response['items'])
  }

}

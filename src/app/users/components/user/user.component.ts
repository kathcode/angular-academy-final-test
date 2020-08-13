import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IUserResponse, IUser } from '../../models/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  person: IUser = null;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getPerson();
  }

  getPerson() {
    this.userService.getPerson().subscribe((response: IUserResponse) => {
      const { data } = response;
      this.person = data;
      console.log(this.person);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user: User = new User(
  'Doe',
  'John',
  '',
  25,
  'https://randomuser.me/api/portraits/lego/2.jpg');

  showAge: boolean = false;
  button: string = 'Show Age';

  constructor() { }

  displayAge() {
    this.showAge = !this.showAge;

    if (this.showAge) {
          this.button = 'Hide Age';
        } else {
          this.button = 'Show Age';
        }
  }


  ngOnInit(): void {
  }

}

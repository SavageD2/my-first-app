import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

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

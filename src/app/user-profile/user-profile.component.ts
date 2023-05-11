import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user = {
    name : 'Howard',
    firstName : 'Todd',
    age : 52,
    quote : '',
    photo : 'https://media.tenor.com/rkI1a8s2Z6QAAAAC/todd-howard-it-just-works.gif'
  };

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  avatar = 'https://image.freepik.com/free-vector/login-concept-illustration_114360-739.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}

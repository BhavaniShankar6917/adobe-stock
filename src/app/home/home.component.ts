import { UserInfo } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  email: string = '';
  currUser: any = localStorage.getItem('user');
  constructor(public service: AuthService) {}
  ngOnInit() {
    this.email = JSON.parse(this.currUser)?.email;
    console.log(this.email, this.currUser);
  }
}

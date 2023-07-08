import { AuthService } from './../auth.service';
import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { onAuthStateChanged, Auth, UserInfo } from '@angular/fire/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  title = 'login';
  form = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl(),
  });
  createNew = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl(),
  });
  createNewAccount: boolean = false;
  currAuth: any = '';
  UserData: any = '';

  constructor(private fireauth: Auth, public service: AuthService) {
    onAuthStateChanged(this.fireauth, (user: any) => {
      if (user) {
        this.UserData = user;
        localStorage.setItem('user', JSON.stringify(this.UserData));
        JSON.parse(localStorage.getItem('user')!);
        console.log(this.UserData);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
        console.log(this.UserData);
      }
    });
  } //private service: AuthService, //private fireauth: Auth
  getAuthFire() {
    console.log(this.fireauth.currentUser);
    return this.fireauth.currentUser;
  }
  log(email: any) {
    console.log(email);
  }

  get emailValue() {
    return this.form.get('email')?.value as string;
  }
  get createNewEmail() {
    return this.createNew.get('email')?.value as string;
  }
  get passwordValue() {
    return this.form.get('password')?.value as string;
  }
  get createNewPassword() {
    return this.createNew.get('password')?.value as string;
  }
}

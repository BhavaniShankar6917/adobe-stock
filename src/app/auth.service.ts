import { Router } from '@angular/router';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  fetchSignInMethodsForEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from '@angular/fire/auth';
import { getAuth, sendEmailVerification, User } from 'firebase/auth';
import { Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  UserData: any;
  isExistingUser: boolean = false;
  constructor(
    private auth: Auth,
    private router: Router,
    private ngZone: NgZone
  ) {}
  async register(email: string, password: string) {
    createUserWithEmailAndPassword(this.auth, email, password)
      .then((success) => {
        // console.log(this.auth, success);
        this.isExistingUser = false;
        this.ngZone.run(() => {
          this.sendEmailVerification();
          window.alert('Account created successfully. Login to proceed.');
          this.router.navigate(['/login']);
        });
      })
      .catch((failure) => {
        console.log(failure);
      });
  }
  async Login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((result: any) => {
        this.UserData = result.user;
        console.log(this.UserData);
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  async Logout() {
    // signOut(this.fireauth).then((res) => console.log(res));
    signOut(this.auth).then((res) => {
      // console.log(res)
      this.router.navigate(['/login']);
    });
  }
  fetchSigninMethods(email: string) {
    fetchSignInMethodsForEmail(this.auth, email)
      .then((res) => {
        if (res.length > 0) {
          this.isExistingUser = true;
        }
        console.log(res);
      })
      .catch((rej) => {
        console.log(rej);
      });
  }
  GoogleAuth() {
    return this.loginWithPopup(new GoogleAuthProvider());
  }
  async loginWithPopup(provider: any) {
    return signInWithPopup(this.auth, provider).then(() => {
      this.router.navigate(['/home']);
    });
  }
  sendEmailVerification() {
    return sendEmailVerification(this.auth.currentUser as User);
  }
}

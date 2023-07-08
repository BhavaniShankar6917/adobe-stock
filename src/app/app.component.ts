import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirebaseApp } from 'firebase/app';
import { initializeApp } from '@angular/fire/app';
// import { getAuth } from 'firebase/auth';
import { environment } from 'src/environment/environment';
import { Database, provideDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  EmailAuthProvider,
  EmailAuthCredential,
  AuthProvider,
  User,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  Auth,
  signOut,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
// import {}
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'auth';
}

// async SignIn(email: string, password: string) {
//   return this.afAuth
//     .signInWithEmailAndPassword(email, password)
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       window.alert(error.message);
//     });
// }
// async SignOut() {
//   return this.afAuth
//     .signOut()
//     .then((result) => {
//       window.alert('Logged out!');
//       console.log(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

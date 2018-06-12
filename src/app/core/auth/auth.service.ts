import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthService {

  user;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router,
  ) { }

  signUp({ email, password }) {
    this.angularFireAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .catch(console.error);
  }

  signIn({ email, password }) {
    this.angularFireAuth.auth
      .signInWithEmailAndPassword(email, password)
      .catch(console.error);
  }

  signOut() {
    this.angularFireAuth.auth
      .signOut()
      .catch(console.error);
  }

  getUser() {
    return this.angularFireAuth.user
      .pipe(
        tap(user => this.user = user)
      );
  }

  isLogged() {
    return !!this.user;
  }
}

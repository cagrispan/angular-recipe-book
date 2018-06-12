import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {

  isSignUp = false;
  buttonText = 'Sign In';

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.isSignUp = !!params['mode'];
      this.buttonText = this.isSignUp ? 'Sign Up' : 'Sign In';
    });
  }

  onSubmit(authForm) {
    this.isSignUp
      ? this.authService.signUp(authForm.value)
      : this.authService.signIn(authForm.value);
  }

}

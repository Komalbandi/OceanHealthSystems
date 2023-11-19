import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { first } from 'rxjs';
import { Router } from '@angular/router';
import { ServerService } from './common/server.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public serverCall: ServerService,
    public router: Router
  ) {
    this.loginForm = fb.group({
      userName: new FormControl('', [Validators.required]),
      userPassword: new FormControl('', [Validators.required]),
    });
  }

  submitLogin() {
    if (this.loginForm.status !== 'INVALID') {
      this.login();
    }
  }

  login() {
    this.serverCall
      .getLogin(this.loginForm.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate(['/home']);
        },
      });
  }
}

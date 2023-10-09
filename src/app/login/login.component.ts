import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) {
    if (localStorage.getItem('userToken') !== null) {
      _Router.navigate(['/home'])
    }
  }

  isLoading: boolean = false
  apiError: string = ''
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{5,10}/)]),

  })
  handleLogin(loginForm: FormGroup) {
    this.isLoading = true;
    if (loginForm) {
      this._AuthService.login(loginForm.value).subscribe({
        next: (response) => {
          console.log(response);

          if (response.message == 'success') {
            localStorage.setItem('userToken', response.token)
            this._AuthService.decodeUserData()
            console.log(response);
            this.isLoading = false
            this._Router.navigate(['/home'])
          }
        },
        error: (err) => {
          this.isLoading = false
          console.log(err)

          this.apiError = err

        }
      })

    }
    console.log(loginForm.value);

  }

}

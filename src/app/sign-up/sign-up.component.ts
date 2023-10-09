import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
Router
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) {

  }

  isLoading: boolean = false
  apiError: string = ''
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    email: new FormControl(null, [Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{5,10}/)]),
    rePassword: new FormControl(null),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}/)])

  }, { validators: this.rePasswordMatch })
  handleRegister(registerForm: FormGroup) {
    this.isLoading = true;
    if (registerForm.valid) {
      this._AuthService.register(registerForm.value).subscribe({
        next: (response) => {

          if (response.message === 'success') {
            this.isLoading = false
            console.log(response);
              
          }
        },
        error: (err) => {
          this.isLoading = false
          console.log(err.error.message)

          this.apiError = err.error.message
        }
      })

    }
    console.log(registerForm.value);

  }

  rePasswordMatch(registerForm: any) {
    let passwordControl = registerForm.get('password');

    let repasswordControl = registerForm.get('rePassword');
    if (passwordControl?.value === repasswordControl?.value) {
      return null
    
    }
    else {
      repasswordControl?.setErrors({passwordmatch: 'not matching' })
      return { passwordmatch: 'not matching' }
    }
  }

}

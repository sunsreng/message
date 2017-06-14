import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from "app/auth.service";

@Component({
  moduleId: module.id,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form;
  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.form = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: verifyPassword('password','confirmPassword')
    });
  }
  onSubmit() {
    console.log(this.form.errors);
    this.auth.register(this.form.value);
  }
}

function verifyPassword(pwd, confirmPwd) {
  return form => {
    if (form.controls[pwd].value !== form.controls[confirmPwd].value)
      { return { misMatchPassword: true } }
  }

  // function emailValid() {
  //   return control => {
  //     var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //     return regex.test(control.value) ? null : { invalidEmail: true }
  //   }
  // }
}

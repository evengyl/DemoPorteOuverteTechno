import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  register: FormGroup = new FormGroup(
    {
      login: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(25)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(25)]),
    },
    { validators: this.passwordConfirmMatchValidator },
  );

  constructor(private router : Router) {}

  onRegister() {
    if (this.register.valid) {
      this.router.navigate(["/login"])
    }
  }

  ngOnInit(): void {}

  passwordConfirmMatchValidator(g: AbstractControl): ValidationErrors | null {
    const password = g.get('password');
    const passwordConfirm = g.get('passwordConfirm');

    if (passwordConfirm.hasError('required') || passwordConfirm.hasError('minlength')) {
      return;
    }

    if (password.value !== passwordConfirm.value) {
      passwordConfirm.setErrors({
        mismatch: true,
      });
    } else {
      passwordConfirm.setErrors(null);
    }
  }
}

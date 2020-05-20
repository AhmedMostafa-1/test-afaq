import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
) {}
  ngOnInit() {
    this.registrationForm = this.fb.group({

     
        name: new FormControl(null, Validators.required),
        email: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required),
      
    });
  }

  register() {
    this.authService
      .registerUser(this.registrationForm.value)
      .subscribe(() => {
        console.log('good');
      });

  }

}

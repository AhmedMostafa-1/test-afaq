import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  authCredentialsDto: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
) {}
  ngOnInit() {
    this.authCredentialsDto = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
  userLogin() {
    this.authService.login(this.authCredentialsDto.value).subscribe(
      res => {
        localStorage.setItem("token", res.accessToken);
        console.log('done ya beh',res);
      },
      error => {
        console.log('error',error);
      }
    );
  }

}

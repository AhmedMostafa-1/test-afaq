import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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

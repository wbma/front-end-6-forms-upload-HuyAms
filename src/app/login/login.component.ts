import { Component, OnInit } from '@angular/core';
import { MediaService } from '../services/media.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  loginStatus = false;
  constructor(private mediaService: MediaService,
              private route: Router) { }

  ngOnInit() {
    if (localStorage.getItem('token') !== null) {
      this.mediaService.getUserData().subscribe(
        response => {
          console.log(response);
          if (response !== null) {
            this.route.navigate(['front']);
            this.loginStatus = true;
          } else {
            this.route.navigate(['login']);
            this.loginStatus = false;
          }
        }
      );
    } else {
      this.route.navigate(['login']);
    }
  }

  login() {
    this.mediaService.login(this.username, this.password).subscribe(
      (data: any) => {
        console.log(data);
        const token: string = data.token;
        localStorage.setItem('token', token);
        this.loginStatus = false;
      }
    );
    this.route.navigate(['front']);
  }
}

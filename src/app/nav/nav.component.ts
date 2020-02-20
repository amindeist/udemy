import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  title: any = 'آموزش انگولار8';
  model: any = {};

  constructor(public authService: AuthService, private alertifyService: AlertifyService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('با موفقیت وارد شدید');
      this.alertifyService.success('با موفقیت وارد شدید');
    }, error => {
      console.log('عملیات ورود با شکست مواجه شد');
      this.alertifyService.error('عملیات ورود با شکست مواجه شد');
    });
  }

  loggedIn() {
   return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    console.log('خارج شدید');
    this.alertifyService.message('خارج شدید');
  }

}

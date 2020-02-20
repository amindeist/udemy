import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import {AlertifyService} from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};


  constructor(private authService: AuthService, private alertifyService: AlertifyService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      console.log('ثبت نام شما با موفقیت انجام شد');
      this.alertifyService.success('ثبت نام شما با موفقیت انجام شد');
    }, error => {
      console.log(error);
      this.alertifyService.error(error);
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log('عملیات لغو شد');
    this.alertifyService.message('عملیات لغو شد');
  }

}

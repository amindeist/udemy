import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AuthService} from '../_services/auth.service';
import {AlertifyService} from '../_services/alertify.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import {User} from '../_models/user';
import {Router} from '@angular/router';
import {ECalendarValue, IDatePickerConfig, IDatePickerDirectiveConfig} from 'ng2-jalali-date-picker';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  user: User;
  registerForm: FormGroup;
  colorTheme = 'theme-dark-blue';

  bsConfig: Partial<BsDatepickerConfig>;


  constructor(private authService: AuthService, private alertify: AlertifyService, private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    // this.registerForm = new FormGroup({
    //   username: new FormControl('', Validators.required),
    //   password: new FormControl('',
    //     [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
    //   confirmPassword: new FormControl('', Validators.required)
    // }, this.passwordMatchValidator);

    this.bsConfig = { containerClass: this.colorTheme };
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      gender: ['male'],
      username: ['', Validators.required],
      knownAs: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      confirmPassword: ['', Validators.required]
    }, {validator: this.passwordMatchValidator});
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('confirmPassword').value
      ? null : {mismatch: true};
  }

  register() {
    if (this.registerForm.valid) {
      this.user = Object.assign({}, this.registerForm.value);
      this.authService.register(this.user).subscribe(() => {
        this.alertify.success('ثبت نام شما با موفقیت انجام شد');
      }, error => {
        this.alertify.error(error);
      }, () => {
        this.authService.login(this.user).subscribe(() => {
          this.router.navigate(['/members']);
        });
      });
    }


    console.log(this.registerForm.value);

    // this.authService.register(this.model).subscribe(() => {
    //   this.alertifyService.success('ثبت نام شما با موفقیت انجام شد');
    // }, error => {
    //   console.log(error);
    //   this.alertifyService.error(error);
    // });
  }

  cancel() {
    this.cancelRegister.emit(false);
    this.alertify.message('عملیات لغو شد');
  }

}

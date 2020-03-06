import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthService} from "../_services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode = false;
  values: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }


  registerToggle() {
    this.registerMode = !this.registerMode;
  }


  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }


}

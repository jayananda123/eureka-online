import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminLogout = false;
  defaultProgramm = "Java Programming";
  defaultChoice = "radio";
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onClickAdminLogout() {
    this.adminLogout = !this.adminLogout;
  }
  onAdminSubmit(adminData: NgForm) {
    this.http
      .post('https://angular-api-project-f7983-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json', adminData.value)
      .subscribe(form => {
        console.log(form);
      });


  }
  onClickClear() {

  }

}

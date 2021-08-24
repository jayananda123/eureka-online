import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isHidden = false;
  loginPage = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickClose() {
    this.isHidden = !this.isHidden;
    this.router.navigate(['student']);
  }
  onClickLogin() {
    this.loginPage = !this.loginPage;
    this.isHidden = !this.isHidden;
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  closeLogin = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickCloseLogin() {
    this.closeLogin = !this.closeLogin
    this.router.navigate(['student']);
  }
}

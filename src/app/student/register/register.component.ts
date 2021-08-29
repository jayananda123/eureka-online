import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isHidden = false;
  loginPage = false;
  defaultOption = "Java Programming";
  message = false;

  constructor(private router: Router, private http: HttpClient) { }

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

  onSubmit(form: NgForm) {
    const passOne = form.value.password;
    const passTwo = form.value.passwordX;
    if (form.valid && passOne === passTwo) {
      this.http
        .post('https://angular-api-project-f7983-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json', form.value)
        .subscribe();
    }


  }

}

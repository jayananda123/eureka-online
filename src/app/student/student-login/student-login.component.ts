import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/post.module';
import { map } from "rxjs/operators"
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  openLogout = false;
  closeLogin = false;
  loadedPosts: Post[] = [];
  isFetching = false;


  constructor(private router: Router, private http: HttpClient, private postsService: PostsService) { }

  ngOnInit(): void {
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(posts => {
      this.isFetching = false;

      this.loadedPosts = posts;
      for (let data in this.loadedPosts) {
        console.log(data);
      }

    });
  }

  onClickCloseLogin() {
    this.closeLogin = !this.closeLogin
    this.router.navigate(['student']);
  }

  onClickSubmit() {
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.closeLogin = true;
      this.openLogout = true;
      this.loadedPosts = posts;
    });

  }
}

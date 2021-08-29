import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Post } from "./post.module";

@Injectable({ providedIn: 'root' })
export class PostsService {

    constructor(private http: HttpClient) { }

    fetchPosts() {
        return this.http.get<{ [key: string]: Post }>('https://angular-api-project-f7983-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
            .pipe(map((responseData) => {
                const postsArray: Post[] = [];
                for (const key in responseData) {
                    if (responseData.hasOwnProperty(key)) {
                        postsArray.push({ ...responseData[key], id: key });
                    }
                }
                return postsArray;
            })
            );
    }
}
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  posts: any;

    constructor(private http: HttpClient) {
    
    }

  ngOnInit(): void {
    this.http.get('http://localhost:5049/api/posts').subscribe(
      response => { this.posts = response; },
      error => { console.log(error) }
    );
  }
}

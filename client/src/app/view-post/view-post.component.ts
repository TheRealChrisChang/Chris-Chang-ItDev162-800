import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  post: any = {}

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost() {
    let id = this.route.snapshot.paramMap.get('id');
    this.http.get(`http://localhost:5049/api/posts/${id}`).subscribe(post => {
      this.post = post;
    }
    );
  }
}
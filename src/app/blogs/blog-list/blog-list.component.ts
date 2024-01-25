import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogs = []; // array to store all the blog objects

  constructor(private _blogService: BlogService) {}

  ngOnInit(): void {
    this._blogService.getBlogs().subscribe((data) => {
      this.blogs = data;
    });
  }
}
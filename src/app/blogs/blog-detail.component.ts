import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../blogs-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html'
})
export class BlogDetailComponent implements OnInit {
  blogId!: number; // Initialize the property with type number and set it to undefined initially

  constructor(private blogsService: BlogsService, private router: Router) {}

  ngOnInit(): void {
    this.blogId = Number(this.router.routeReuseStrategy.primaryRoute?.snapshot.paramMap.get('id')); // Get the blog id from route parameters
    if (!isNaN(Number(this.blogId))) {
      this.loadBlog(); // Call loadBlog() method to fetch and display the selected blog details
    } else {
      alert("Invalid Blog ID");
      this.router.navigate(['/']); // Navigate back to home page if invalid id is provided
    }
  }

  private loadBlog(): void {
    const blog = this.blogsService.getSingleBlog(this.blogId); // Call getSingleBlog() method from BlogsService to fetch the selected blog details by its ID
    if (blog) {
      console.log('Loaded blog:', JSON.stringify(blog)); // Log loaded blog object for debugging purposes
    } else {
      alert("Failed to load blog");
    }
  }
}
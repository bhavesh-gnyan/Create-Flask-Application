import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../blogs-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html'
})
export class EditBlogComponent implements OnInit {

  blogId!: number; // Initialize the property with type number and set it to undefined initially

  constructor(private blogsService: BlogsService, private router: Router) {}

  ngOnInit(): void {
    this.blogId = Number(this.router.routeReuseStrategy.previousLocation.path().split('/').pop()); // Get the blog ID from URL path and convert it to number
    if (!isNaN(Number(this.blogId))) {
      this.getBlogById(); // Call a method to get the blog by its ID when the component is initialized
    } else {
      alert('Invalid Blog ID');
      this.router.navigate(['/']); // Navigate back to home page if invalid ID provided
    }
  }

  /** Get blog details based on given ID */
  getBlogById() {
    this.blogsService.getBlog(this.blogId).subscribe((response) => {
      console.log('Got the blog:', response); // Log the retrieved blog to check if it's working fine
    });
  }
}
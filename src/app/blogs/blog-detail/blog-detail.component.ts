import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog-list/blog.service'; // Import the service for blog CRUD operations

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html'
})
export class BlogDetailComponent implements OnInit {
  selectedBlog?: any; // Initialize variable to hold the selected blog data (type can be changed based on your model)

  constructor(private _blogService: BlogService) {} // Inject the service in the component's constructor

  ngOnInit(): void {
    this.selectedBlog = this._blogService.getSelectedBlog(); // Get selected blog from service (assuming it has a getter for the same)
  }
}
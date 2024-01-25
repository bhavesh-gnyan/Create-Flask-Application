import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../blogs-service.service';
import { BlogModel } from '../../shared/blog-model.interface';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html'
})
export class CreateBlogComponent implements OnInit {

  blog = new BlogModel(); // Initialize a new instance of the BlogModel interface

  constructor(private blogsService: BlogsService) {}

  ngOnInit(): void { }

  createNewBlog() {
    this.blogsService.createBlog(this.blog); // Call the service to create a blog with current blog instance
  }
}
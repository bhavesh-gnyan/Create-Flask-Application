import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../blogs-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html'
})
export class BlogListComponent implements OnInit {
  blogs$: Observable<Blog[]>; // Replace "Blog" with the interface name from blog-model.interface.ts

  constructor(private _blogsService: BlogsService) {}

  ngOnInit(): void {
    this._blogsService.getAll().subscribe((data) => (this.blogs$ = data)); // Replace "Blog[]" with the interface name from blog-model.interface.ts
  }
}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsComponent, CreateEditFormComponent } from './blogs.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BlogDetailComponent, BlogListComponent } from './blog-detail.component';
import { PaginationModule } from '../shared-components/pagination/pagination.module';

const routes: Routes = [
  // Add your blog routes here (e.g., '/create', '/edit/:id' etc.)
];

@NgModule({
  declarations: [BlogsComponent, CreateEditFormComponent, BlogDetailComponent, BlogListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes), // Add your blog routes here (e.g., '/create', '/edit/:id' etc.)
    PaginationModule
  ],
  exports: [BlogsComponent],
})
export class BlogsModule { }
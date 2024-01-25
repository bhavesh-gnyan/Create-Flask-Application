import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Import all the components and modules related to blogs application
import { BlogsComponent } from './blogs.component';
import { CreateEditFormComponent } from './create-edit-form/create-edit-form.component';
import { BlogDetailComponent, BlogDetailModule } from './blog-detail/blog-detail.component';
import { PaginationComponent, PaginationModule } from '../shared-components/pagination';

// Import the shared components module for common functionality and styles
import { SharedComponentsModule } from '../shared-components/shared-components.module';

@NgModule({
  declarations: [BlogsComponent, CreateEditFormComponent, BlogDetailComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, PaginationModule, SharedComponentsModule, BlogDetailModule],
  providers: [],
  bootstrap: [AppComponent] // Change this to the root component of your application
})
export class AppModule { }
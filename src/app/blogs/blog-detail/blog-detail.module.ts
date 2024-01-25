import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogDetailComponent } from './blog-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Add your blog detail route here
];

@NgModule({
  declarations: [BlogDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class BlogDetailModule {}
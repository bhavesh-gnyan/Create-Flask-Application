import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from './blogs.component';
import { CreateEditFormComponent } from './create-edit-form/create-edit-form.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

const routes: Routes = [
  { path: '', component: BlogsComponent }, // Default route for the blogs page
  { path: 'new', component: CreateEditFormComponent, data: { action: 'create' } }, // Route to create a new blog post
  { path: 'edit/:id', component: CreateEditFormComponent, data: { action: 'update' } }, // Route for editing an existing blog post with id in the URL parameter
  { path: 'blogs/:id', component: BlogDetailComponent }, // Route to display a single blog post by its ID
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
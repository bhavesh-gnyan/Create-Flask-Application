import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEditFormComponent } from './blog-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateEditFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: []
})
export class CreateEditFormModule { }
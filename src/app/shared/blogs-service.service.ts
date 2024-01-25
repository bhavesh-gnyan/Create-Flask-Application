import { Injectable } from '@angular/core';
import { BlogModel } from '../blog-model.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  private blogs: BlogModel[] = []; // array to store all the blog data

  constructor() {}

  /**
   * Add a new blog post to the list of available posts.
   */
  addBlog(blogData: BlogModel) {
    this.blogs.push(blogData);
  }

  /**
   * Get all blogs from the service for displaying in the blog list component.
   */
  getAllBlogs(): BlogModel[] {
    return [...this.blogs]; // spread operator to create a copy of array
  }

  /**
   * Find and return a single blog by its ID.
   */
  findBlogById(id: number): BlogModel | undefined {
    const foundBlog = this.blogs.find((blog) => blog.id === id); // use array's built-in find method to search for the matching blog
    return foundBlog;
  }

  /**
   * Update a single blog by its ID with new data.
   */
  updateBlog(updatedBlog: BlogModel) {
    const index = this.blogs.findIndex((blog) => blog.id === updatedBlog.id); // find the index of the existing blog to be updated
    if (index !== -1) {
      this.blogs[index] = updatedBlog; // update the blog at that specific index with new data
    } else {
      throw Error(`Unable to update blog as no blog exists for id: ${updatedBlog.id}`);
    }
  }

  /**
   * Delete a single blog by its ID.
   */
  deleteBlog(blogId: number) {
    const index = this.blogs.findIndex((blog) => blog.id === blogId); // find the index of the existing blog to be deleted
    if (index !== -1) {
      this.blogs.splice(index, 1); // remove the blog at that specific index from the array using splice method
    } else {
      throw Error(`Unable to delete blog as no blog exists for id: ${blogId}`);
    }
  }
}
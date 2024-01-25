import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'YOUR_API_BASE_URL'; // Replace with your actual API URL

  constructor(private httpClient: HttpClient) {}

  getBlogs() {
    return this.httpClient.get(`${this.baseUrl}/blogs`);
  }

  createBlog(newBlog: any) {
    return this.httpClient.post(`${this.baseUrl}/blogs`, newBlog);
  }

  getSingleBlog(id: number) {
    return this.httpClient.get(`${this.baseUrl}/blogs/${id}`);
  }

  updateBlog(updatedBlog: any, id: number) {
    return this.httpClient.put(`${this.baseUrl}/blogs/${id}`, updatedBlog);
  }

  deleteBlog(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/blogs/${id}`);
  }
}
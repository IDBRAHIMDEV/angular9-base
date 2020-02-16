import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = "http://localhost:5000/posts"
  }

  getAll() {
    return this.http.get(this.apiUrl);
  }

  save(data: Article) {
    return this.http.post(this.apiUrl, data);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  update(data: Article) {
    console.log(data)

    let newData = {
      title: data.title,
      body: data.body,
      active: data.active
    }

    return this.http.put(`${this.apiUrl}/${data.id}`, newData)
  }

  activate(article: Article) {
    
    let data = {
      active: !article.active
    }

    return this.http.patch(`${this.apiUrl}/${article.id}`, data)
  }

}

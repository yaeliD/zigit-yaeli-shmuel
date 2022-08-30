import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from 'src/app/shared/models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  URL = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  addCommentToProject(comment: Comment) {
    return this.http.post(`${this.URL}addCommentToProject`, comment)
  }

  getCommentByProjectId(ProjectId: string) {
    return this.http.get(`${this.URL}getCommentByProjectId/` + ProjectId)
  }
}

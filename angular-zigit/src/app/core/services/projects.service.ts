import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { project } from 'src/app/shared/models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  URL = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  addProject(Project: project) {
    return this.http.post(`${this.URL}addProject`, Project);
  }

  getAllProjects() {
    return this.http.get(`${this.URL}getAllProjects`);
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL = 'http://localhost:3000/';
  token!: string;

  constructor(private router: Router, private http: HttpClient, private errorService: ErrorService) { }

  login(password: any, email: any) {
    this.http.post(`${this.URL}userLogIn`, { password, email }).subscribe((res: any) => {
      this.token = res.token;
      if (this.token === undefined) this.errorService.showErrorToast(res.message);
      this.router.navigate(['/home']);
    })
  }

  getUser() {
    return this.token;
  }
}
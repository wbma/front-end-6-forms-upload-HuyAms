import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http/src/response';

@Injectable()
export class MediaService {
  constructor(private http: HttpClient) { }
  baseUrl = 'http://media.mw.metropolia.fi/wbma/';
  login(username: string, password: string) {
    const body = {
      'username': `${username}`,
      'password': `${password}`
    };
    const settings = {
      headers : new HttpHeaders().set('Content-Type', 'application/json')
    };
    return this.http.post(this.baseUrl + 'login', body, settings);
  }

  register(username: string, password: string, email: string) {
    const body = {
      'username': `${username}`,
      'password': `${password}`,
      'email': `${email}`
    };
    const settings = {
      headers : new HttpHeaders().set('Content-Type', 'application/json')
    };
    return this.http.post(this.baseUrl + 'users', body, settings);
  }

  getUserData() {
    const token = localStorage.getItem('token');
    const settings = {
      headers : new HttpHeaders().set('x-access-token', token)
    };

    return this.http.get(this.baseUrl + 'users/user', settings);
  }

  uploadFile(file: File, title: string, description: string) {
    const token = localStorage.getItem('token');
    const settings = {
      headers: new HttpHeaders().set('x-access-token', token)
    };

    const path = this.baseUrl + 'media';

    // let headers = new HttpHeaders()
    //   .set('content-type', 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW')
    // let headers = new HttpHeaders().set('content-type', 'multipart/form-data')

    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('title', title);
    formData.append('description', description);

    this.http.post(path , formData, settings).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );

  }
}

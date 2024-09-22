
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SwitherService {
  openOffcanvas$: any;

  constructor(private http: HttpClient) {}

  //new api calls
  // private apiUrl = 'https://sasi-vcs-repo.onrender.com/auth/get_all_vcs_users';
  // GET request
  private apiUrl = environment.webURL;
  getCall(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  // POST request
  postCall(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

}

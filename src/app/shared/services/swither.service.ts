
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
  private adonaiURL = environment.masterURL;
  getCall(url: string): Observable<any> {
    return this.http.get<any>(url);
  }
  // POST request
  postCall(url: string, data: any): Observable<any> {
    return this.http.post<any>(url, data);
  }

  signupApi(data: any): Observable<any> { return this.http.post(`${this.apiUrl}auth/save_vcs_users`, data); }
  cmpnyUsers(data: any): Observable<any> { return this.http.get(`${this.apiUrl}auth/getUserDetails/${data}`); }
  onForgotPassword(data:any): Observable<any> { return this.http.post(`${this.apiUrl}auth/password_reset`, data); }
  onAdonai(data:any): Observable<any> { return this.http.post(`${this.adonaiURL}adonai/sso_login_user/${data}`,''); }
  getAllUsers(): Observable<any> { return this.http.get(`${this.apiUrl}auth/get_all_vcs_users`); }
  getValidEmail(data:any): Observable<any> { return this.http.get(`${this.apiUrl}auth/getUser/${data}`); }
  onMailValidSignup(email:any): Observable<any> { return this.http.post(`${this.apiUrl}auth/generate_otp?email=${email}&action=signup`,''); }
  onMailValidReset(email:any): Observable<any> { return this.http.post(`${this.apiUrl}auth/generate_otp?email=${email}&action=reset`,''); }
  onOtpSignup(email:any, otp:any): Observable<any> { return this.http.post(`${this.apiUrl}auth/validate_otp?email=${email}&otp=${otp}`,''); }
  onAdonaiView(email:any): Observable<any> { return this.http.get(`${this.adonaiURL}adonai/fetch_data_adonai/${email}`); }
  onAdonaiUpdate(data:any): Observable<any> { return this.http.post(`${this.adonaiURL}adonai/update_subscription`, data); }
  onCrmView(email:any): Observable<any> { return this.http.get(`${this.apiUrl}auth/fetch_data_crm/${email}`); }
  onCrmUpdate(data:any): Observable<any> { return this.http.post(`${this.apiUrl}crm/update_subscription`, data); }

  // http://auth-service.vcs.plus:8080/auth/validate_otp?email=vijay%40gmail.com&otp=123456
}

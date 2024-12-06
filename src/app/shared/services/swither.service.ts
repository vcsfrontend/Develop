
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
  // super admin Adonai apis 
  onAdonaiView(email:any): Observable<any> { return this.http.get(`${this.adonaiURL}adonai/fetch_data_adonai/${email}`); }
  onAdonaiUpdate(data:any): Observable<any> { return this.http.post(`${this.adonaiURL}adonai/update_subscription`, data); }
  adonaiHstry(email:any): Observable<any> { return this.http.get(`${this.adonaiURL}adonai/sub_scription_history/${email}`); }
  // super admin Crm apis 
  onCrmView(email:any): Observable<any> { return this.http.get(`${this.apiUrl}auth/fetch_data_crm/${email}`); }
  onCrmUpdate(data:any): Observable<any> { return this.http.post(`${this.apiUrl}auth/update_subscription_crm`, data); }
  
  crmHstry(email:any): Observable<any> { return this.http.get(`${this.apiUrl}auth/sub_scription_history/${email}`); }
  superAdminDbData(): Observable<any> { return this.http.get(`${this.apiUrl}auth/analytic_da_fe`); }

  projectLst(data:any): Observable<any> { return this.http.post(`${this.adonaiURL}adonai/get_proj_details`, data); }
  designersDbData(data:any): Observable<any> { return this.http.post(`${this.adonaiURL}adonai/proj_anl_de_ikl`, data); }
  saveProject(data:any): Observable<any> { return this.http.post(`${this.adonaiURL}adonai/save_project_details`, data); }
  onProjectDtls(proj_id:any): Observable<any> { return this.http.get(`${this.adonaiURL}adonai/getProjectByid/${proj_id} `); }
  onAddTaskDtls(data:any): Observable<any> { return this.http.post(`${this.adonaiURL}adonai/add_project_cycle`, data); }
  getTaskDtls(project_id:any): Observable<any> { return this.http.get(`${this.adonaiURL}adonai/get_project_cycle/${project_id}`); }
  getProjEstimation(project_id:any): Observable<any> { return this.http.get(`${this.adonaiURL}adonai/get_payment_details/${project_id}`); }
  saveProjEstimation(data:any): Observable<any> { return this.http.post(`${this.adonaiURL}adonai/project_payment_history`, data); }

  // https://adonai-vcs-fmbqfgbudgendtfu.israelcentral-01.azurewebsites.net/adonai/get_proj_details/{companyname}
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
    
  }

 // validateLoginDetails(user: User) {
   // window.sessionStorage.setItem("userdetails",JSON.stringify(user));
    //return this.http.get(environment.baseURL + "/user", { observe: 'response',withCredentials: true });
  //}

}

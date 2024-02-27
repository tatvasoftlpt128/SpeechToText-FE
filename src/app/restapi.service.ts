import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http: HttpClient) { }

  public login(username: string, password:string){
    //const headers=new HttpHeaders({Authorization: 'Basic '+btoa(username+":"+password)})
    const headers= new HttpHeaders().set('username', username).set('password', password);
    console.log("avnish"+ username + password);
    
    return this.http.get("http://localhost:8082/comein", {headers,responseType:'text' as 'json'});

  }
}

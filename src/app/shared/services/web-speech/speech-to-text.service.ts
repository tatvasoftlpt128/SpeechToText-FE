import { HttpClient } from '@angular/common/http';
import { DebugElement, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SharedModule } from '../../shared.module';
import { ɵparseCookieValue } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SpeechToTextService {
  [x: string]: any;

  constructor(private httpClient:HttpClient) { }

  chat(text: String){
    return  this.httpClient.post(environment.baseURL+"/text/tellme",text,{responseType:'text'});
  }


}

import { HttpClient } from '@angular/common/http';
import { DebugElement, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpeechToTextService {

  constructor(private httpClient:HttpClient) { }

  chat(text: String){
    return  this.httpClient.post(environment.baseURL+"/text/tellme",text,{responseType:'text'});
  }
}

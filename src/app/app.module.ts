import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { WebSpeechModule } from './web-speech/web-speech.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestapiService } from './restapi.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
     FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    WebSpeechModule,
    HttpClientModule,
    MatInputModule,
     MatFormFieldModule,
     ReactiveFormsModule
  ],
  providers: [RestapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

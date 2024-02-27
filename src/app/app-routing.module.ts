import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebSpeechComponent } from './web-speech/web-speech.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {
    path: "", redirectTo: "login", pathMatch: "full"
   },  
  {
    path: "home",
    component: WebSpeechComponent,
   // pathMatch: "full"

  }
  //,{
   // path: '**',
   // redirectTo: ''
 // }
 ,{
  path: "comein", component: LoginComponent
 }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
 
})


export class AppRoutingModule { }

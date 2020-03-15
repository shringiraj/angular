import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:"",pathMatch:"full",component:HomeComponent},
  {path:"login",pathMatch:"full",component:LoginComponent},
  {path:"registration",pathMatch:"full",component:RegistrationComponent},
  {path:"user",loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

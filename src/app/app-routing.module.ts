import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AdPicComponent } from './ad-pics/adPics.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DonateComponent } from './functions/donate/donate.component';

const routes: Routes = [
  {path: "auth/login", component: LoginComponent},
  {path: "", component: AdPicComponent},
  {path: "auth/signup", component: SignupComponent},
  {path: "api/donate", component: DonateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

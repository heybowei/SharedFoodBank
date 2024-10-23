import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule} from "@angular/material/button"
import { HeaderComponent } from './header/header.component';
import { AdPicComponent } from './ad-pics/adPics.component';
import { MatToolbar } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card'; 
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DonateComponent } from './functions/donate/donate.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdPicComponent,
    LoginComponent,
    SignupComponent,
    DonateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbar,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

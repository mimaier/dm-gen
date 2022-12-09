import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";

import { BrowserModule } from '@angular/platform-browser';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CharactersComponent } from './characters/characters.component';
import { LandscapesComponent } from './landscapes/landscapes.component';
import { TownsComponent } from './towns/towns.component';
import { ItemsComponent } from './items/items.component';
import { FormsModule } from '@angular/forms';
import { PromptWindowComponent } from './prompt-window/prompt-window.component';
import { ImageWindowComponent } from './image-window/image-window.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FooterComponent } from './footer/footer.component';
import { AccountComponent } from './account/account.component';
import { NgxPayPalModule} from 'ngx-paypal';
import { ActivateYourAccountComponent } from './activate-your-account/activate-your-account.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { AboutComponent } from './about/about.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

interface NgxSpinnerConfig {
  type?: string;
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    CharactersComponent,
    LandscapesComponent,
    TownsComponent,
    ItemsComponent,
    PromptWindowComponent,
    ImageWindowComponent,
    SignUpComponent,
    FooterComponent,
    AccountComponent,
    ActivateYourAccountComponent,
    ImpressumComponent,
    AboutComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    SocialLoginModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPayPalModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component'
import { LandscapesComponent } from './landscapes/landscapes.component'
import { TownsComponent } from './towns/towns.component'
import { ItemsComponent } from './items/items.component'
import { SignUpComponent } from './sign-up/sign-up.component';
import { AccountComponent } from './account/account.component';
import { ActivateYourAccountComponent } from './activate-your-account/activate-your-account.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {}},
  { path: 'home', component: HomeComponent, data: {}},
  { path: 'characters', component: CharactersComponent, data: {}},
  { path: 'landscapes', component: LandscapesComponent, data: {}},
  { path: 'towns', component: TownsComponent, data: {}},
  { path: 'items', component: ItemsComponent, data: {}},
  { path: 'sign-up', component: SignUpComponent, data: {}},
  { path: 'account', component: AccountComponent, data: {}},
  { path: 'activate-your-account', component: ActivateYourAccountComponent, data: {}},
  { path: 'impressum', component: ImpressumComponent, data: {}},
  { path: 'forgot-password', component: ForgotPasswordComponent, data: {}},


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

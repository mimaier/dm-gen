import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component'
import { LandscapesComponent } from './landscapes/landscapes.component'
import { CreaturesComponent } from './creatures/creatures.component'
import { TownsComponent } from './towns/towns.component'
import { ItemsComponent } from './items/items.component'
import { SignUpComponent } from './sign-up/sign-up.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {}},
  { path: 'home', component: HomeComponent, data: {}},
  { path: 'characters', component: CharactersComponent, data: {}},
  { path: 'creatures', component: CreaturesComponent, data: {}},
  { path: 'landscapes', component: LandscapesComponent, data: {}},
  { path: 'towns', component: TownsComponent, data: {}},
  { path: 'items', component: ItemsComponent, data: {}},
  { path: 'sign-up', component: SignUpComponent, data: {}},
  { path: 'account', component: AccountComponent, data: {}},

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

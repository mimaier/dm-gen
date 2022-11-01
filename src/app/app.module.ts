import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { CharactersComponent } from './characters/characters.component';
import { CreaturesComponent } from './creatures/creatures.component';
import { LandscapesComponent } from './landscapes/landscapes.component';
import { TownsComponent } from './towns/towns.component';
import { ItemsComponent } from './items/items.component';
import { FormsModule } from '@angular/forms';
import { PromptWindowComponent } from './prompt-window/prompt-window.component';
import { TriggerWindowComponent } from './trigger-window/trigger-window.component';
import { ImageWindowComponent } from './image-window/image-window.component';

interface NgxSpinnerConfig {
  type?: string;
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    CharactersComponent,
    CreaturesComponent,
    LandscapesComponent,
    TownsComponent,
    ItemsComponent,
    PromptWindowComponent,
    TriggerWindowComponent,
    ImageWindowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

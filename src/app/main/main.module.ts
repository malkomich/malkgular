import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MainComponent } from './main.component';

import { CardsComponent } from '../cards/cards.component';
import { TablesComponent } from '../tables/tables.component';
import { FormsComponent } from '../forms/forms.component';

import { MainRoutingModule } from './main.routing.module';

@NgModule({
  declarations: [
    MainComponent,
    CardsComponent,
    TablesComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    MainRoutingModule
  ],
  exports: [
    MainComponent
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MainModule { }

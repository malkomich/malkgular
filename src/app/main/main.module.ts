import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PolymerElement } from '@vaadin/angular2-polymer';

import { MainComponent } from './main.component';

const POLYMER_ELEMENTS = [
  PolymerElement('vaadin-combo-box'),
  PolymerElement('paper-input')
];

const COMBO_BOX = PolymerElement('vaadin-combo-box');
const PAPER_INPUT = PolymerElement('paper-input');

@NgModule({
  declarations: [
    MainComponent,
    // POLYMER_ELEMENTS,
    COMBO_BOX,
    PAPER_INPUT
  ],
  providers: [],
})
export class MainModule { }

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MainComponent } from './main.component';

@NgModule({
  declarations: [
    MainComponent
  ],
  exports: [
    MainComponent
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MainModule { }

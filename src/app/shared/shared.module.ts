import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule,
    TranslateModule
  ],
  exports: [
    BrowserModule,
    HttpModule,
    MaterialModule,
    TranslateModule
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardsComponent } from '../cards/cards.component';
import { TablesComponent } from '../tables/tables.component';
import { FormsComponent } from '../forms/forms.component';

const mainRoutes: Routes = [
  { path: 'cards',  component: CardsComponent },
  { path: 'tables',  component: TablesComponent },
  { path: 'forms',  component: FormsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(mainRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }

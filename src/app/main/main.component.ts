import { Component } from '@angular/core';

@Component({
  selector: 'main-root',
  templateUrl: './main.component.html',
})
export class MainComponent {
  title = 'MalkGular!';
  myLabel = 'Select a number';
  myValue = '4';
  myItems = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
}

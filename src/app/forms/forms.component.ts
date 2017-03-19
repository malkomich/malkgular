import { Component } from '@angular/core';

@Component({
  selector: 'mlk-forms',
  templateUrl: './forms.component.html',
})
export class FormsComponent {
  
  myLabel = 'Select a number';
  myValue = '4';
  myItems = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  public onComboChange(event) {
    this.myValue = event.detail.value;
  }
}

import { Component, Inject, ElementRef } from '@angular/core';

@Component({
  selector: 'mlk-main',
  templateUrl: './main.component.html',
  styleUrls: [ './main.component.scss' ]
})
export class MainComponent {

  elementRef: ElementRef;

  title = 'MalkGular!';

  sections: Object[];
  selectedSection: Object;
  drawerVisible: boolean;

  constructor(
    @Inject(ElementRef) elementRef: ElementRef
  ) {
    this.elementRef = elementRef;
    this.sections = [
      { name: 'cards', title: 'Cards' },
      { name: 'tables', title: 'Tables' },
      { name: 'forms', title: 'Forms' }
    ];
    this.drawerVisible = false;
  }

  public onSectionSelected(event): void {
    this.selectedSection = event.target.selected;
  }

  public toggleDrawer(event): void {
    const drawer = this.elementRef.nativeElement.querySelector('#drawer');
    drawer.toggle();
  }

  public drawerTransitioned(event): void {
    this.drawerVisible = !this.drawerVisible;
  }
}

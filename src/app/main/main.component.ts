import { Component, Inject, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'mlk-main',
  templateUrl: './main.component.html',
  styleUrls: [ './main.component.scss' ]
})
export class MainComponent implements OnInit {

  /* UI Elements */
  drawer;

  title = 'MalkGular!';

  sections: Object[];
  selectedSection: Object;
  drawerVisible: boolean;

  constructor(
    @Inject(ElementRef) public elementRef: ElementRef
  ) {
    this.sections = [
      { name: 'cards', title: 'Cards' },
      { name: 'tables', title: 'Tables' },
      { name: 'forms', title: 'Forms' }
    ];
  }

  ngOnInit() {
    this.drawer = this.elementRef.nativeElement.querySelector('#drawer');
    this.drawerVisible = this.drawer.opened;
  }

  public onSectionSelected(event): void {
    this.selectedSection = event.target.selected;
  }

  public toggleDrawer(event): void {
    this.drawer.toggle();
  }

  public drawerTransitioned(event): void {
    this.drawerVisible = this.drawer.opened;
  }
}

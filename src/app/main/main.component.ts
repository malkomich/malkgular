import { Component, Inject, ElementRef, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'mlk-main',
  templateUrl: './main.component.html',
  styleUrls: [ './main.component.scss' ]
})
export class MainComponent implements OnInit {

  title = 'PRUEBA!';

  sections: Object[];
  selectedSection: number;
  drawerVisible: boolean;

  /* UI Elements */
  private drawer;
  private sidebar;

  constructor(
    @Inject(ElementRef) public elementRef: ElementRef,
    translate: TranslateService
  ) {
    translate.setDefaultLang('en');

    this.sections = [
      { name: 'cards', label: 'CARDS' },
      { name: 'tables', label: 'TABLES' },
      { name: 'forms', label: 'FORMS' }
    ];
  }

  ngOnInit() {
    this.drawer = this.elementRef.nativeElement.querySelector('#drawer');
    this.drawerVisible = this.drawer.opened;
    this.sidebar = this.elementRef.nativeElement.querySelector('#sidebar');
  }

  public onSectionSelected(event): void {
    this.selectedSection = this.sidebar.selected;
    this.toggleDrawer(event);
  }

  public toggleDrawer(event): void {
    this.drawer.toggle();
  }

  public drawerTransitioned(event): void {
    this.drawerVisible = this.drawer.opened;
  }
}

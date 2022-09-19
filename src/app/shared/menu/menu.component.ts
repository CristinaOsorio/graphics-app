import { Component, OnInit } from '@angular/core';

interface MenuItem {
  route: string;
  text: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`li {cursor: pointer}`]
})
export class MenuComponent {

  menu: MenuItem[] = [
    { route: '/graph/bar', text: 'Barra' },
    { route: '/graph/double', text: 'Barra doble' },
    { route: '/graph/pie', text: 'Circular' },
    { route: '/graph/pie-http', text: 'Circular con Http' },
  ];

  constructor() { }


}

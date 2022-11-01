import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openMenu(menu: HTMLElement, btnIcon: HTMLElement) {
    if (menu.className.indexOf('mobile-menu') !== -1) {
      menu.classList.remove('mobile-menu');
      btnIcon.classList.remove('icon-close');
      btnIcon.classList.add('icon-menu');
    } else {
      btnIcon.classList.add('icon-close');
      btnIcon.classList.remove('icon-menu');

      menu.classList.add('mobile-menu');
    }
  }

}

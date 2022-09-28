import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() translateX = '0'
  @Output() outVisibleMenu = new EventEmitter<string>()

  changeTranslateX() {
    this.outVisibleMenu.emit();
  }
}

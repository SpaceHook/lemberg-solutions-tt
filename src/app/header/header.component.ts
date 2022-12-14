import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() outVisibleMenu = new EventEmitter<string>()

  changeTranslateX() {
    this.outVisibleMenu.emit();
  }
}

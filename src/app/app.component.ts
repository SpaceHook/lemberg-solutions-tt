import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  translateX = 'translateX(100%)';

  visibleMenu() {
    if (this.translateX === 'translateX(100%)') {
      this.translateX = 'translateX(0)';
    } else {
      this.translateX = 'translateX(100%)';
    }
  }
}

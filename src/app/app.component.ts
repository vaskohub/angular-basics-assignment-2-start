import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';

  showMsgClickEventHandler(): void {
    window.alert(`Hello, ${this.username}`);
  }

  resetClickEventHandler(): void {
    this.username = '';
  }
}

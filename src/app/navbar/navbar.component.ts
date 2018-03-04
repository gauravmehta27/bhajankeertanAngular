import { Component } from '@angular/core';

@Component({
  selector: 'navbar-component',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  customInterval=3000;
  alertMe(): void {
    setTimeout(function(): void {
      alert("You've selected the alert tab!");
    });
  }
}

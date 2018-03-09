import { Component } from '@angular/core';

@Component({
  selector: 'navbar-component',
  templateUrl: './navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent {
  customInterval=3000;
  isIn = false;   // store state
  toggleState() { // click handler
      let bool = this.isIn;
      this.isIn = bool === false ? true : false; 
  }
}

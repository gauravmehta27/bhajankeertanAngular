import { Component } from '@angular/core';

@Component({
  selector: 'slider-component',
  templateUrl: './slider.component.html'
})
export class SliderComponent {
  customInterval=3000;
  alertMe(): void {
    setTimeout(function(): void {
      alert("You've selected the alert tab!");
    });
  }
}

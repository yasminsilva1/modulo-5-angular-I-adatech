import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  message?: string;

  // * Event Binding
  onButtonClicked(direction: string): void {
    this.message = `Botão ${direction} acionado!`;
  }
}

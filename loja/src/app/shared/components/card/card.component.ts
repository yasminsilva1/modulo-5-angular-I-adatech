import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from './../../../services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() product!: Product;

  constructor(public cartService: CartService) {}
}

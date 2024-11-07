import { Component, Input } from '@angular/core';
import { Pages } from 'src/app/constants/pages.enum';
import { CartService } from 'src/app/services/cart.service';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  pages = Pages;

  constructor(
    public cartService: CartService,
    private pagesService: PagesService
  ) {}

  navigateTo(page: Pages): void {
    this.pagesService.setCurrentPage(page);
  }
}

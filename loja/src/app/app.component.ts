import { Component, ViewEncapsulation } from '@angular/core';
import { Product } from './models/product.model';
import { Observable } from 'rxjs';
import { PagesService } from './services/pages.service';
import { Pages } from './constants/pages.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'loja';
  // documentNumber = '01234567890';
  // obs = new Observable((observer) => {
  //   observer.next(1);

  //   setTimeout(() => {
  //     observer.next(3);
  //   }, 1000);

  //   setTimeout(() => {
  //     observer.next(4);
  //   }, 2000);

  //   setTimeout(() => {
  //     observer.next(2);
  //   }, 500);

  //   // setTimeout(() => {
  //   //   observer.error('Houve um erro');
  //   // }, 100);

  //   setTimeout(() => {
  //     observer.complete();
  //   }, 100);
  // });

  pages = Pages;

  constructor(public pagesService: PagesService) {
    // this.obs.subscribe({
    //   next: (response) => {
    //     console.log('next:', response);
    //   },
    //   error: (err) => {
    //     console.error(err);
    //   },
    //   complete: () => {
    //     console.log('Terminei');
    //   },
    // });
    // * Sintaxe enxuta, porém só trata o 'next'
    // this.obs.subscribe((response) => {
    //   console.log(response);
    // });
  }
}

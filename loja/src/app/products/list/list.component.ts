import { HttpClient } from '@angular/common/http';
import { Component, DestroyRef, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { CardComponent } from '../../shared/components/card/card.component';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
    standalone: true,
    imports: [NgFor, CardComponent],
})
export class ListComponent implements OnInit, OnDestroy {
  protected unsubscribe = new Subject<void>();

  apiUrl = 'https://crudcrud.com/api/b1ede6ab53604cd0b537992db7a78e46';

  products: Product[] = [
    // {
    //   _id: 'c633b67e-61fc-4947-b483-42556242afc3',
    //   title: 'Smartphone XYZ',
    //   description:
    //     'Smartphone moderno com design elegante, tela de alta resolução, câmeras avançadas para fotos nítidas, desempenho rápido com processador potente, longa duração de bateria e tecnologia 5G.',
    //   price: 1899.99,
    //   qty: 100,
    //   image: 'smartphone.jpg',
    // },
    // {
    //   _id: 'fe0cd828-04e2-4c9d-81d4-b5a3a9950fba',
    //   title: 'Laptop',
    //   description:
    //     'Laptop poderoso com design leve e elegante, tela nítida de alta resolução, processador rápido para multitarefas, ampla capacidade de armazenamento, bateria de longa duração e conectividade avançada.',
    //   price: 5599.9,
    //   qty: 20,
    //   image: 'laptop.jpg',
    // },
    // {
    //   _id: '9bfc6ea9-e6a1-4da3-bd70-483cce3bd2e5',
    //   title: 'Console',
    //   description:
    //     'Console de última geração com gráficos realistas em 4K, desempenho rápido, armazenamento expansível, controle ergonômico, suporte a jogos online e integração com serviços de streaming.',
    //   price: 3899.99,
    //   qty: 15,
    //   image: 'console.jpg',
    // },
    // {
    //   _id: 'ba3fdc40-8cca-41e3-8ec1-b42ced9a564b',
    //   title: 'Smartphone XPTO',
    //   description:
    //     'Smartphone versátil com tela ampla e vibrante, câmeras de alta qualidade para capturas detalhadas, desempenho ágil, armazenamento generoso, bateria duradoura e carregamento rápido.',
    //   price: 4499.99,
    //   qty: 100,
    //   image: 'smartphones.jpg',
    // },
    // {
    //   _id: 'e5a300b6-f044-4a72-a6c4-ff987c5aed0e',
    //   title: 'Smartwatch',
    //   description:
    //     'Smartwatch moderno com design sofisticado, tela sensível ao toque, monitoramento de saúde e atividades, notificações em tempo real, GPS integrado, longa duração de bateria e resistência à água.',
    //   price: 899.99,
    //   qty: 100,
    //   image: 'smartwatch.jpg',
    // },
  ];

  // obs = new Observable((observer) => {
  //   let count = 0;
  //   setInterval(() => {
  //     observer.next(count);
  //     count++;
  //   }, 1000);
  // });

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getProducts();

    // this.obs.pipe(takeUntil(this.unsubscribe)).subscribe((res) => {
    //   console.log(res);
    // });
  }

  getProducts(): void {
    this.http.get<Product[]>(`${this.apiUrl}/products`).subscribe({
      next: (response) => {
        this.products = response;
        setTimeout(() => {
          this.products[0].description += ' --- EDITED';
        }, 3000);
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        console.log('Dados obtidos com sucesso!');
      },
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}

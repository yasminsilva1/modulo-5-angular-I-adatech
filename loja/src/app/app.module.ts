import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './commons/components/header/header.component';
import { FooterComponent } from './commons/components/footer/footer.component';
import { CardComponent } from './shared/components/card/card.component';
import { DocumentPipe } from './pipes/document.pipe';
import { CartComponent } from './products/cart/cart.component';
import { CreateComponent } from './products/create/create.component';
import { ListComponent } from './products/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    DocumentPipe,
    CartComponent,
    CreateComponent,
    ListComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

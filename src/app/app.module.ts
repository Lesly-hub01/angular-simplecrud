import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';



import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { LibrosService } from "./libros.service";




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LibrosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

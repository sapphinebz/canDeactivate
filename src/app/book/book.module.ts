import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [BookComponent],
  imports: [
    CommonModule,
    BookRoutingModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
  ],
})
export class BookModule {}

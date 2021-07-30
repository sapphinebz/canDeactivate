import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterComponent } from './character.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CharacterComponent],
  imports: [
    CommonModule,
    InputTextModule,
    CharacterRoutingModule,
    ButtonModule,
    ReactiveFormsModule,
  ],
})
export class CharacterModule {}

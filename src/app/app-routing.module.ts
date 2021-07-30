import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'book',
    loadChildren: () => import('./book/book.module').then((m) => m.BookModule),
  },
  {
    path: 'character',
    loadChildren: () =>
      import('./character/character.module').then((m) => m.CharacterModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

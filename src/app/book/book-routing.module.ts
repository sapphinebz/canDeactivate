import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsSubmitGuard } from '../is-submit.guard';
import { BookComponent } from './book.component';

const routes: Routes = [
  { path: '', component: BookComponent, canDeactivate: [IsSubmitGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}

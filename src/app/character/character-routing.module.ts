import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsSubmitGuard } from '../is-submit.guard';
import { CharacterComponent } from './character.component';

const routes: Routes = [
  { path: '', component: CharacterComponent, canDeactivate: [IsSubmitGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacterRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesseurPage } from './professeur.page';
import { ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '',
    component: ProfesseurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfesseurPageRoutingModule {}

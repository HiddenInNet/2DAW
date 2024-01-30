import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListadoComponent } from './componentess/listado/listado.component';
import { FormPersonaComponent } from './componentess/form-persona/form-persona.component';

const routes: Routes = [
  {
    path: "",
    component: ListadoComponent
  },
  {
    path: "personas-add/:id",
    component: FormPersonaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

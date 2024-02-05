import { Routes } from '@angular/router';
import { ListadoComponent } from './components/listado/listado.component';
import { FormPersonaComponent } from './components/form-persona/form-persona.component';

export const routes: Routes = [
    {
        path: "",
        component: ListadoComponent
    },
    {
        path: "personas-add/:id",
        component: FormPersonaComponent
    }
];

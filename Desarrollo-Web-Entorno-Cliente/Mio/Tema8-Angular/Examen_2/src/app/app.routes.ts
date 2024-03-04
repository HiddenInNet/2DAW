import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InterpretesComponent } from './components/interpretes/interpretes.component';
import { InterpreteFormComponent } from './components/interprete-form/interprete-form.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PeliculaFormComponent } from './components/pelicula-form/pelicula-form.component';

export const routes: Routes = [

    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'interpretes',
        component: InterpretesComponent
    },
    {
        path: 'interprete-form/:id',
        component: InterpreteFormComponent
    },
    {
        path: 'peliculas',
        component: PeliculasComponent
    },
    {
        path: 'pelicula-form/:id',
        component: PeliculaFormComponent
    }
];

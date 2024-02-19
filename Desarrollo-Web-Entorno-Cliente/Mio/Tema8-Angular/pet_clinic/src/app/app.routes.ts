import { Routes } from '@angular/router';
import { OwnersComponent } from './components/owners/owners.component';
import { DetailOwnersComponent } from './components/detail-owners/detail-owners.component';
import { CrudOwnerComponent } from './components/crud-owner/crud-owner.component';
import { VetsComponent } from './components/vets/vets.component';
import { DetailVetsComponent } from './components/detail-vets/detail-vets.component';
import { HomeComponent } from './components/home/home.component';
import { CrudVetComponent } from './components/crud-vet/crud-vet.component';
import { PetsComponent } from './components/pets/pets.component';
import { DetailPetsComponent } from './components/detail-pets/detail-pets.component';
import { CrudPetComponent } from './components/crud-pet/crud-pet.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'owners',
        component: OwnersComponent
    },
    {
        path: 'owner/:id',
        component: DetailOwnersComponent
    },
    {
        path: 'crud-owner/:id',
        component: CrudOwnerComponent
    },
    {
        path: 'vets',
        component: VetsComponent
    },
    {
        path: 'vet/:id',
        component: DetailVetsComponent
    },
    {
        path: 'crud-vet/:id',
        component: CrudVetComponent
    },
    {
        path: 'pets',
        component: PetsComponent
    },
    {
        path: 'pet/:id',
        component: DetailPetsComponent
    },
    {
        path: 'crud-pet/:id',
        component: CrudPetComponent
    }
];

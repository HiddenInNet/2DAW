import { Routes } from '@angular/router';
import { VetsComponent } from './components/vets/vets.component';
import { PetsComponent } from './components/pets/pets.component';
import { MainComponent } from './components/main/main.component';
import { OwnersComponent } from './components/owners/owners.component';
import { DetailOwnerComponent } from './components/detail-owner/detail-owner.component';
import { FormVetComponent } from './components/form-vet/form-vet.component';
import { DetailVetComponent } from './components/detail-vet/detail-vet.component';
import { DetailPetComponent } from './components/detail-pet/detail-pet.component';
import { FormPetComponent } from './components/form-pet/form-pet.component';
import { FormOwnerComponent } from './components/form-owner/form-owner.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'owners',
        component: OwnersComponent
    },
    {
        path: 'owner/:id',
        component: DetailOwnerComponent
    },
    {
        path: 'form-owner/:id',
        component: FormOwnerComponent
    
    },
    {
        path: 'vets',
        component: VetsComponent
    },
    {
        path: 'vet/:id',
        component: DetailVetComponent
    },
    {
        path: 'form-vet/:id',
        component: FormVetComponent
    },
    {
        path: 'pets',
        component: PetsComponent
    },
    {
        path: 'pet/:id',
        component: DetailPetComponent
    },
    {
        path: 'form-pet/:id',
        component: FormPetComponent
    }
];

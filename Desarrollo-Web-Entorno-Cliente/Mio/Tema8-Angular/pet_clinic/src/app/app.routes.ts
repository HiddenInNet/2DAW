import { Routes } from '@angular/router';
import { OwnersComponent } from './components/owners/owners.component';
import { DetailOwnersComponent } from './components/detail-owners/detail-owners.component';

export const routes: Routes = [
    {
        path: "",
        component: OwnersComponent
    },
    {
        path: "owner/:id",
        component: DetailOwnersComponent
    }
];

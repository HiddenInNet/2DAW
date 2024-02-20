import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Owner } from '../models/owner';
import { Pet } from '../models/pet';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  private url: string = environment.ENLACE_API;

  constructor(private http: HttpClient) { }

  getOwners() {

    console.log("Dentro de getOwners()");

    let pa = JSON.stringify({
      accion: "ListarOwners"
    });

    return this.http.post<any>(this.url, pa);
  }

  getOwnerById(id: number) {
    console.log("Dentro de getOwnerById()");

    let pa = JSON.stringify({
      accion: "ObtenerOwnerId",
      id: id
    });

    return this.http.post<Owner>(this.url, pa);
  }

  insertOwner(owner: Owner) {
    console.log("Dentro de insertOwner()");

    let pa = JSON.stringify({
      accion: "AnadeOwner",
      owner: owner
    })

    return this.http.post<Owner>(this.url, pa);
  }

  updateOwner(owner: Owner) {
    console.log("Dentro de removeOwner()");

    let pa = JSON.stringify({
      accion: "ModificaOwner",
      owner: owner
    })

    return this.http.post<Owner>(this.url, pa);
  }

  removeOwner(owner: Owner) {

    console.log("Dentro de removeOwner()");

    let pa = JSON.stringify({
      accion: "BorraOwner",
      id: owner.id,
      listado: "OK"
    })

    return this.http.post<Owner>(this.url, pa);
  }

  getPetsByOwnerId(owner_id: number) {

    console.log("Dentro de getPetsByOwnerId()");

    let pa = JSON.stringify({
      accion: "ObtenerOwnerId_Pets",
      id: owner_id,
    })

    return this.http.post<Owner>(this.url, pa);
  }

  getPetVisits(pet: Pet) {

    console.log("Dentro de getPetVisits()");

    let pa = JSON.stringify({
      accion: "ListarVisitasPet",
      id: pet,
    })

    return this.http.post<any>(this.url, pa);
  }
}

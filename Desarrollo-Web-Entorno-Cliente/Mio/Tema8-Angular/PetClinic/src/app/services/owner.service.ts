import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Owner } from '../models/owner';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  private url: string = "http://localhost/pet_clinic/servicios.php";

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
}

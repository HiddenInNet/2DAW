import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vet } from '../models/vet';

@Injectable({
  providedIn: 'root'
})
export class VetService {

  private url: string = "http://localhost/pet_clinic/servicios.php";

  constructor(private http: HttpClient) { }

  getVets() {
    console.log("Dentro de getVets()");

    let pa = JSON.stringify({
      accion: "ListarVets"
    });

    return this.http.post<any>(this.url, pa);
  }

  getVetById(vet: Vet) {

    console.log("Dentro de getVetById()");

    let pa = JSON.stringify({
      accion: "ObtenerVetId",
      id: vet
    });

    return this.http.post<Vet>(this.url, pa);

  }

  insertVet(vet: Vet) {

    console.log("Estamos dentro de insertVet()");

    let pa = JSON.stringify({
      accion: "AnadeVet",
      vet: vet
    });

    return this.http.post<Vet>(this.url, pa);
  }

  updateVet(vet: Vet) {

    console.log("Dentro de updateVet()");

    let pa = JSON.stringify({
      accion: "ModificaVet",
      vet: vet
    });

    return this.http.post<Vet>(this.url, pa);
  }

  removeVet(vet: Vet) {

    console.log("Dentro de removeOwner()");

    let pa = JSON.stringify({
      accion: "BorraVet",
      id: vet.id
    });

    return this.http.post<Vet>(this.url, pa);
  }
}

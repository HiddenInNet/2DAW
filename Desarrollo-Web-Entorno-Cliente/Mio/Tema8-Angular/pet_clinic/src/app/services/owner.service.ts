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
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private url: string = environment.ENLACE_API;

  constructor(private http: HttpClient) { }

  getPetsTypes() {

    console.log("Dentro de getPetsTypes()");

    let pa = JSON.stringify({
      accion: "ListarPettypes"
    });

    return this.http.post<any>(this.url, pa);
  }

  

}

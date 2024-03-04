import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Interprete } from '../models/interprete';

@Injectable({
  providedIn: 'root'
})
export class InterpreteService {

  private url: string = environment.ENLACE_API;

  constructor(private http: HttpClient) { }

  getInterpretes() {

    console.log("dentro de getInterpretes()");

    let pa = JSON.stringify({
      accion: "ListarInterpretes",
    });

    return this.http.post<any>(this.url, pa);
  }

  getInterpreteById(id: number) {

    console.log("dentro de getInterpreteById()");

    let pa = JSON.stringify({
      accion: "ObtenerInterpreteId",
      id: id
    });

    return this.http.post<Interprete>(this.url, pa);
  }

  insertInterprete(interprete: Interprete) {

    console.log("dentro de insertInterprete()");

    let pa = JSON.stringify({
      accion: "AnadeInterprete",
      interprete: interprete
    });

    return this.http.post<any>(this.url, pa);
  }

  updateInterprete(interprete: Interprete) {

    console.log("dentro de updateInterprete()");

    let pa = JSON.stringify({
      accion: "ModificaInterprete",
      interprete: interprete
    });

    return this.http.post<any>(this.url, pa);

  }

  deleteInterprete(interprete: Interprete) {

    console.log("dentro de deleteInterprete()");

    let pa = JSON.stringify({
      accion: "BorrarInterprete",
      id: interprete.id
    });

    return this.http.post<any>(this.url, pa);
  }

}

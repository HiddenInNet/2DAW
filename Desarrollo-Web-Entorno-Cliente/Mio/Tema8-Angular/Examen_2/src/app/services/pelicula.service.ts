import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Pelicula } from '../models/pelicula';
import { Genero } from '../models/genero';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private url: string = environment.ENLACE_API;

  constructor(private http: HttpClient) { }

  getPeliculas() {

    console.log("dentro de getPeliculas()");

    let pa = JSON.stringify({
      accion: "ListarPeliculas"
    });

    return this.http.post<any>(this.url, pa);
  }

  getPeliculaId(id: number) {

    console.log("dentro de getPeliculaId()");

    let pa = JSON.stringify({
      accion: "ObtenerPeliculaId",
      id: id
    });

    return this.http.post<any>(this.url, pa);
  }

  insertPelicula(pelicula: Pelicula) {

    console.log("dentro de insertPelicula()", pelicula);

    let pa = JSON.stringify({
      accion: "AnadePelicula",
      pelicula: pelicula
    });

    return this.http.post<{ result: string }>(this.url, pa);
  }

  updatePelicula(pelicula: Pelicula) {

    console.log("dentro de updatePelicula()", pelicula);

    let pa = JSON.stringify({
      accion: "ModificaPelicula",
      pelicula: pelicula
    });

    return this.http.post<{ result: string }>(this.url, pa);
  }

  deletePelicula(id: number) {

    console.log("dentro de deletePelicula()");

    let pa = JSON.stringify({
      accion: "BorrarPelicula",
      id: id
    });

    return this.http.post<any>(this.url, pa);
  }

  getGeneros() {

    console.log("dentro de getGeneros()");

    let pa = JSON.stringify({
      accion: "ListarGeneros"
    });

    return this.http.post<Genero[]>(this.url, pa);
  }
}

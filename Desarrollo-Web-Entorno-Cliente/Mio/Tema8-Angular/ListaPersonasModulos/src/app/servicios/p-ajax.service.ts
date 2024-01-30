import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../modelos/persona';

@Injectable({
  providedIn: 'root'
})
export class PAjaxService {

  private url: string = "http://localhost/Segundo-trimestre/servicios/servidor.php";

  constructor(private http: HttpClient) { }

  listar() {
    let pa = JSON.stringify({
      servicio: "listar"
    });
    return this.http.post<Persona[]>(this.url, pa);
  }

  peticionInicial() {
    console.log("Toi en peti")

    //return this.http.get(this.url);
    return this.http.get<any>(this.url);
  }

  peticion(url: string) {  // Pide los datos a los personajes
    console.log("Toi en peti personalizada")

    //return this.http.get(this.url);
    return this.http.get<any>(url);
  }
}

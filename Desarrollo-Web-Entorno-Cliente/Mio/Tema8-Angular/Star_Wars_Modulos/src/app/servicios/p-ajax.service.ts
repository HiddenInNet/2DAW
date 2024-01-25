import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PAjaxService {

  private urlPersonajes: string = "http://swapi.dev/api/people/?format=json";

  constructor(private http: HttpClient) { }

  peticionInicial() {
    console.log("Toi en peti")

    //return this.http.get(this.urlPersonajes);
    return this.http.get<any>(this.urlPersonajes);
  }

  peticion(url: string) {  // Pide los datos a los personajes
    console.log("Toi en peti personalizada")

    //return this.http.get(this.urlPersonajes);
    return this.http.get<any>(url);
  }


}

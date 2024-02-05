import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../models/persona';

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

  selPersonaID(id: number) {
    var p = JSON.stringify({
      servicio: "selPersonaID",
      id: id
    })

    console.log("Se ha seleccionado a la persona con id: ", id);
    return this.http.post<Persona>(this.url, p);
  }

  delPersona(persona: Persona) {
    console.log("dentro de 'delPersona' con persona.id: ", persona.id);

    var p = JSON.stringify({
      servicio: "borrar",
      id: persona.id
    });

    return this.http.post<Persona[]>(this.url, p);
  }

  insertarPersona(persona: Persona) {

    var p = JSON.stringify({
      servicio: "insertar",
      dni: persona.dni,
      nombre: persona.nombre,
      apellidos: persona.apellidos
    })

    return this.http.post<Persona[]>(this.url, p);
  }

  modificarPersona(persona: Persona) {

    var p = JSON.stringify({
      servicio: "modificar",
      dni: persona.dni,
      nombre: persona.nombre,
      apellidos: persona.apellidos,
      id: persona.id
    });

    return this.http.post<Persona[]>(this.url, p);
  }

}

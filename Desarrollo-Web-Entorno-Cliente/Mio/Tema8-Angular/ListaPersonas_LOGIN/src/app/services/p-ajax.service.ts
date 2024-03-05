import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PAjaxService {

  private ENLACE_LOGIN: string = environment.ENLACE_LOGIN;
  private ENLACE_SERVIDOR: string = environment.ENLACE_SERVIDOR;

  constructor(private http: HttpClient) { }

  // getPersonas() {

  //   console.log("dentro de getPersonas()");

  //   let pa = JSON.stringify({
  //     servicio: "listar"
  //   });

  //   return this.http.post<any>(this.url, pa, environment.cabecera());
  // }

  iniciarSesion(usuario: any) {
    console.log("dentro de iniciarSesion()");

    let pa = JSON.stringify({
      servicio: "inicio_sesion",
      email: usuario.email,
      clave: usuario.clave
    })

    console.log("parametros de iniciarSesion(): ", pa)

    return this.http.post<any>(this.ENLACE_LOGIN, pa);
  }
}

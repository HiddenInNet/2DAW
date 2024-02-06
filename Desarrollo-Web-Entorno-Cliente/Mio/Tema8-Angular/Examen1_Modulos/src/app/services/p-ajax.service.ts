import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Detalles } from '../models/detalles';

@Injectable({
  providedIn: 'root'
})
export class PAjaxService {

  private url: string = "http://localhost/examen/servidor.php";

  constructor(private http: HttpClient) { }

  listarFacturas() {

    console.log("Dentro de listarFacturas");

    let pa = JSON.stringify({
      servicio: "facturas"
    });

    return this.http.post<any>(this.url, pa);
  }

  listarDetalles(id: number) {

    console.log("listarDetalles");

    let pa = JSON.stringify({
      servicio: "detalle",
      id: id
    });

    return this.http.post<Detalles[]>(this.url, pa);
  }

  ///////////////////////////////////////////

  delDetalle(detalle: Detalles) {
    console.log("dentro de 'delPersona' con id", detalle.id);

    var p = JSON.stringify({
      servicio: "borra",
      id: detalle.id
    });

    return this.http.post<Detalles[]>(this.url, p);
  }

  insertarDetalle(detalle: Detalles) {

    console.log("detalle", detalle);

    var p = JSON.stringify({
      servicio: "anade",
      detalle: detalle,
      id_factura: detalle.id_factura,
      cantidad: detalle.cantidad,
      concepto: detalle.concepto,
      precio: detalle.precio,
      tipo_iva: detalle.tipo_iva
    })

    return this.http.post<Detalles[]>(this.url, p);
  }

  modDetalle(detalle: Detalles) {

    var p = JSON.stringify({
      servicio: "modifica",
      id_factura: detalle.id_factura,
      cantidad: detalle.cantidad,
      concepto: detalle.concepto,
      precio: detalle.precio,
      tipo_iva: detalle.tipo_iva,
      id: detalle.id
    });

    return this.http.post<Detalles[]>(this.url, p);
  }

}

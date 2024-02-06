import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PAjaxService } from '../../services/p-ajax.service';
import { Detalles } from '../../models/detalles';

@Component({
  selector: 'app-lista-detalle',
  templateUrl: './lista-detalle.component.html',
  styleUrl: './lista-detalle.component.css'
})
export class ListaDetalleComponent {

  public formulario: boolean;

  public facturaNumero: string;
  public detallesFactura: Detalles[] = [];
  public detalle: Detalles;
  public ivaTotal: number;
  public totalTotal: number;
  public factura_id: number;

  constructor(private peti: PAjaxService, private ruta: Router, private activatedRoute: ActivatedRoute) {

    this.detalle = {
      id: -1,
      cantidad: 0,
      concepto: "nada",
      precio: 0,
      tipo_iva: 0,
      iva: 0,
      total: 0,
      id_factura: this.activatedRoute.snapshot.params["id"]
    }

    this.factura_id = this.activatedRoute.snapshot.params["id"];
    this.formulario = false;
    this.ivaTotal = 0;
    this.totalTotal = 0;
    this.facturaNumero = "";
  }

  ngOnInit() {

    this.factura_id = this.activatedRoute.snapshot.params["id"];
    this.facturaNumero = this.activatedRoute.snapshot.params["numero"];

    this.peti.listarDetalles(this.factura_id).subscribe({
      next: datos => {
        console.log("detalles", datos);
        console.log("id_factura", this.factura_id);

        for (let i = 0; i < datos.length; i++) {

          datos[i].total = (datos[i].cantidad * datos[i].precio);
          datos[i].iva = ((datos[i].tipo_iva / 100) * datos[i].total);

          this.ivaTotal += datos[i].iva;
          this.totalTotal += datos[i].total;
        }

        this.detallesFactura = datos;
      },
      error: error => console.log(error)
    });
  }

  onSubmit(detalle: Detalles) {

    detalle.id_factura = this.factura_id;

    this.peti.insertarDetalle(detalle).subscribe(datos => {
      console.log("datos: ", datos);
      this.ruta.navigate(['/']);
    })
  }

  borrarDetalle(detalle: Detalles) {

    var mensaje = `¿Quieres borrar ${detalle.concepto}?`;

    detalle.id_factura = this.factura_id;

    if (confirm(mensaje)) {
      this.peti.delDetalle(detalle).subscribe(datos => {
        this.detallesFactura = datos;
      })
    }
  }

  modificarDetalle(detalle: Detalles) {

  }

  formNuevo() {
    if (this.formulario) {
      this.formulario = false;
    } else {
      this.formulario = true;
    }
  }
}

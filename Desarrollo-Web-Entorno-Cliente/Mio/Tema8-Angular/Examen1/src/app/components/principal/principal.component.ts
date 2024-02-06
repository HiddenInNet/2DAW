import { Component } from '@angular/core';
import { Factura } from '../../models/factura';
import { Router, ActivatedRoute } from '@angular/router';
import { PAjaxService } from '../../services/p-ajax.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  public listaFacturas: Factura[] = [];

  constructor(private peti: PAjaxService, private ruta: Router) {
    this.peti.listarFacturas().subscribe(datos => {
      console.log("tamos en el constructor", datos)
      this.listaFacturas = datos;
    })
  }
}

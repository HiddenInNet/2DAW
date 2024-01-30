import { Component } from '@angular/core';
import { Persona } from '../../modelos/persona';
import { Router, ActivatedRoute } from '@angular/router';
import { PAjaxService } from '../../servicios/p-ajax.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {

  public listaPer: Persona[] = [];

  constructor(private peti: PAjaxService, private ruta: Router) {
    this.peti.listar().subscribe(datos => {
      console.log("tamos en el constructor", datos)
      this.listaPer = datos;
    })
  }

  iraNuevaPersona() {
    // this.ruta.navigate(['personas-add/-1'])

    this.ruta.navigate(['personas-add', -1])
  }
}

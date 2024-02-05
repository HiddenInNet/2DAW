import { Component } from '@angular/core';
import { Persona } from '../../models/persona';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { PAjaxService } from '../../services/p-ajax.service';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [RouterLink],
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

  iraModificarPersona(personaId: number) {

    this.ruta.navigate(['personas-add', personaId]);
  }

  iraBorrarPersona(persona: Persona) {

    var mensaje = `¿Quieres borrar a ${persona.nombre} ${persona.apellidos}?`;

    if (confirm(mensaje)) {
      this.peti.delPersona(persona).subscribe(datos => {
        this.listaPer = datos;
      })
    }
  }
}

import { Component } from '@angular/core';
import { Persona } from '../../modelos/persona';
import { Router, ActivatedRoute } from '@angular/router';
import { PAjaxService } from '../../servicios/p-ajax.service';

@Component({
  selector: 'app-form-persona',
  templateUrl: './form-persona.component.html',
  styleUrl: './form-persona.component.css'
})
export class FormPersonaComponent {

  public persona: Persona;
  public textoBoton: string;

  constructor(private peti: PAjaxService, private ruta: Router, private activatedRoute: ActivatedRoute) {

    this.persona = {
      id: -1,
      dni: "89946424R",
      nombre: "Antonio",     // Por defecto se le asignaran estos valores a la persona
      apellidos: "Gonzalez"
    }

    this.textoBoton = "Añadir";
  }

  ngOnInit() {
    const personaId = this.activatedRoute.snapshot.params["id"];

    if (personaId == -1) {
      this.textoBoton = "Añadir";
    } else {
      this.textoBoton = "Modificar";

      this.peti.selPersonaID(personaId).subscribe({
        next: datos => {
          this.persona = datos;
        },
        error: error => console.log(error)
      });
    }


  }

  onSubmit(persona: Persona) {

    if (this.persona.id == -1) {

      this.peti.insertarPersona(persona).subscribe(datos => {
        console.log("datos: ", datos);
        this.ruta.navigate(['/']);
      })

    } else {

      this.peti.modificarPersona(this.persona).subscribe(datos => {
        console.log("Modificando la persona", persona);
        this.ruta.navigate(['/']);
      })
    }
  }
}

import { DatePipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Interprete } from '../../models/interprete';
import { InterpreteService } from '../../services/interprete.service';

@Component({
  selector: 'app-interprete-form',
  standalone: true,
  imports: [RouterLink, DecimalPipe, DatePipe, FormsModule],
  templateUrl: './interprete-form.component.html',
  styleUrl: './interprete-form.component.css'
})
export class InterpreteFormComponent {

  public interprete: Interprete = <Interprete>{};
  public textoBoton: string;

  constructor(private peti: InterpreteService, private ruta: Router, private activatedRoute: ActivatedRoute) {

    this.textoBoton = "Añadir"
  }

  ngOnInit() {

    const interprete_id = this.activatedRoute.snapshot.params["id"];

    if (interprete_id != -1) {

      this.textoBoton = "Modificar";

      this.peti.getInterpreteById(interprete_id).subscribe({
        next: datos => {
          console.log("detalles", datos);

          this.interprete = datos;
        },
        error: error => console.log(error)
      });

    } else {
      this.interprete.id = -1;
      this.textoBoton = "Añadir";
    }
  }


  onSubmit(interprete: Interprete) {

    if (this.interprete.id == -1) {

      this.peti.insertInterprete(interprete).subscribe({
        next: datos => {
          console.log("Interprete insertado", datos);

          this.ruta.navigate(["/interpretes"])
        },
        error: error => console.log(error)
      })
    } else {

      console.log("interprete", interprete);
      interprete.id = this.interprete.id

      this.peti.updateInterprete(interprete).subscribe({
        next: datos => {
          console.log("Interprete actualizado", datos);

          this.ruta.navigate(["/interpretes"])
        },
        error: error => console.log(error)
      })
    }
  }

}

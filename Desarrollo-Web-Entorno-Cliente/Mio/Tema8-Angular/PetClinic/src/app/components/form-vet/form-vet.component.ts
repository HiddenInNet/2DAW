import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { VetService } from '../../services/vet.service';
import { Vet } from '../../models/vet';


@Component({
  selector: 'app-form-vet',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './form-vet.component.html',
  styleUrl: './form-vet.component.scss'
})
export class FormVetComponent {

  public vet: Vet;
  public textoBoton: string;

  constructor(private peti: VetService, private ruta: Router, private activatedRoute: ActivatedRoute) {

    this.vet = <Vet>{};
    this.textoBoton = "Añadir";
  }

  ngOnInit() {

    const vet_id = this.activatedRoute.snapshot.params["id"];

    if (vet_id != -1) {

      this.textoBoton = "Modificar";

      this.peti.getVetById(vet_id).subscribe({
        next: datos => {
          console.log("detalles", datos);

          this.vet = datos;
        },
        error: error => console.log(error)
      });
    } else {
      this.textoBoton = "Añadir";
    }

  }

  onSubmit(vet: Vet) {

    if (this.vet.id == -1) {

      this.peti.insertVet(vet).subscribe({
        next: datos => {
          console.log("Owner insertado", datos);

          this.ruta.navigate(["/owners"])
        },
        error: error => console.log(error)
      })
    } else {

      console.log("Vet", vet);
      vet.id = this.vet.id

      this.peti.updateVet(vet).subscribe({
        next: datos => {
          console.log("Owner actualizado", datos);

          this.ruta.navigate(["/owners"])
        },
        error: error => console.log(error)
      })
    }
  }
}

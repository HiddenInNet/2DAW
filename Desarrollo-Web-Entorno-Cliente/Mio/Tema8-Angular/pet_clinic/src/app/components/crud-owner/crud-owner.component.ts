import { Component } from '@angular/core';
import { OwnerService } from '../../services/owner.service';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { Owner } from '../../models/owner';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crud-owner',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './crud-owner.component.html',
  styleUrl: './crud-owner.component.sass'
})
export class CrudOwnerComponent {

  public owner: Owner;
  public textoBoton: string;

  constructor(private peti: OwnerService, private ruta: Router, private activatedRoute: ActivatedRoute) {

    this.owner = {
      id: -1,
      firstName: "John",
      lastName: "Doe",
      address: "calle calle",
      city: "Sevilla",
      telephone: "669621527",
      pets: []
    }

    this.textoBoton = "Añadir"
  }

  ngOnInit() {

    const owner_id = this.activatedRoute.snapshot.params["id"];

    if (owner_id != -1) {

      this.textoBoton = "Modificar";

      this.peti.getOwnerById(owner_id).subscribe({
        next: datos => {
          console.log("detalles", datos);

          this.owner = datos;
        },
        error: error => console.log(error)
      });

    } else {
      this.textoBoton = "Añadir";
    }
  }

  onSubmit(owner: Owner) {

    if (this.owner.id == -1) {

      this.peti.insertOwner(owner).subscribe({
        next: datos => {
          console.log("Owner insertado", datos);

          this.ruta.navigate(["/owners"])
        },
        error: error => console.log(error)
      })
    } else {

      console.log("owner", owner);
      owner.id = this.owner.id

      this.peti.updateOwner(owner).subscribe({
        next: datos => {
          console.log("Owner actualizado", datos);

          this.ruta.navigate(["/owners"])
        },
        error: error => console.log(error)
      })
    }
  }
}

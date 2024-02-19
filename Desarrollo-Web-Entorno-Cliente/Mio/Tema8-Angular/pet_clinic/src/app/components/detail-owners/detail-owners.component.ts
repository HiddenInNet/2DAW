import { Component } from '@angular/core';
import { OwnerService } from '../../services/owner.service';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { Owner } from '../../models/owner';

@Component({
  selector: 'app-detail-owners',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detail-owners.component.html',
  styleUrl: './detail-owners.component.sass'
})
export class DetailOwnersComponent {

  public owner: Owner;

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
  }

  ngOnInit() {

    const owner_id = this.activatedRoute.snapshot.params["id"];

    this.peti.getOwnerById(owner_id).subscribe({
      next: datos => {
        console.log("detalles", datos);

        this.owner = datos;
      },
      error: error => console.log(error)
    });

  }

  removeOwner(owner: Owner) {

    if (confirm("Estás seguro de que quieres borrar a " + this.owner.firstName + " " + this.owner.lastName)) {

      this.peti.removeOwner(owner).subscribe({
        next: datos => {
          console.log("detalles", datos);

          this.ruta.navigate(["/"]);

        },
        error: error => console.log(error)
      })

    }
  }
}

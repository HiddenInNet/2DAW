import { Component } from '@angular/core';
import { OwnerService } from '../../services/owner.service';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { Owner } from '../../models/owner';
import { Pet } from '../../models/pet';
import { DatePipe, DecimalPipe } from '@angular/common';
import { Visit } from '../../models/visit';

@Component({
  selector: 'app-detail-owner',
  standalone: true,
  imports: [RouterLink, DecimalPipe, DatePipe],
  templateUrl: './detail-owner.component.html',
  styleUrl: './detail-owner.component.scss'
})
export class DetailOwnerComponent {

  public owner: Owner;
  public pets: Pet[] = [];

  constructor(private peti: OwnerService, private ruta: Router, private activatedRoute: ActivatedRoute) {

    this.owner = <Owner>{}
  }

  ngOnInit() {

    const owner_id = this.activatedRoute.snapshot.params["id"];

    this.peti.getPetsByOwnerId(owner_id).subscribe({
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

  removeVisit(visit: Visit) {

  }
}

import { Component } from '@angular/core';
import { OwnerService } from '../../services/owner.service';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { Owner } from '../../models/owner';

@Component({
  selector: 'app-owners',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './owners.component.html',
  styleUrl: './owners.component.scss'
})
export class OwnersComponent {

  public owner: Owner;
  public owners: Owner[] = [];

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

    this.peti.getOwners().subscribe({
      next: datos => {
        console.log("detalles", datos);

        this.owners = datos;
      },
      error: error => console.log(error)
    });

  }

  goToOwner(id: number) {
    
    this.ruta.navigate(['/']);
  }
}

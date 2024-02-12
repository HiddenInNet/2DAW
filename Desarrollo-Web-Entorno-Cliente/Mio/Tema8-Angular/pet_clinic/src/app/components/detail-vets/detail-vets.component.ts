import { Component } from '@angular/core';
import { VetService } from '../../services/vet.service';
import { Vet } from '../../models/vet';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-detail-vets',
  standalone: true,
  imports: [],
  templateUrl: './detail-vets.component.html',
  styleUrl: './detail-vets.component.sass'
})
export class DetailVetsComponent {

  public vet: Vet;

  constructor(private peti: VetService, private ruta: Router, private activatedRoute: ActivatedRoute) {
  
    this.vet = {
      id: -1,
      firstName: "Pepe",
      lastName: "Villuela"
    }
  }

  ngOnInit() {

    const vet_id = this.activatedRoute.snapshot.params["id"];

    this.peti.getVetById(this.vet).subscribe({
      next: datos => {
        console.log("detalles", datos);

        this.vet = datos;
      },
      error: error => console.log(error)
    })

  }
}

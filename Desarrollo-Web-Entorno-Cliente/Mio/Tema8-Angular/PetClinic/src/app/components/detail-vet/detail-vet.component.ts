import { Component } from '@angular/core';
import { VetService } from '../../services/vet.service';
import { Vet } from '../../models/vet';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-detail-vet',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detail-vet.component.html',
  styleUrl: './detail-vet.component.scss'
})
export class DetailVetComponent {

  public vet: Vet;

  constructor(private peti: VetService, private ruta: Router, private activatedRoute: ActivatedRoute) {

    this.vet = <Vet>{}
  }

  ngOnInit() {

    const vet_id = this.activatedRoute.snapshot.params["id"];

    this.peti.getVetById(vet_id).subscribe({
      next: datos => {
        console.log("detalles", datos);

        this.vet = datos;
      },
      error: error => console.log(error)
    })

  }

  removeVet(vet: Vet) {

  }
}

import { Component } from '@angular/core';
import { VetService } from '../../services/vet.service';
import { Vet } from '../../models/vet';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-vets',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './vets.component.html',
  styleUrl: './vets.component.sass'
})
export class VetsComponent {

  public vet: Vet;
  public vets: Vet[] = [];

  constructor(private peti: VetService, private ruta: Router, private activatedRoute: ActivatedRoute) {

    this.vet = <Vet>{}
  }

  ngOnInit() {

    this.peti.getVets().subscribe({
      next: datos => {
        console.log("detalles", datos);

        this.vets = datos;
      },
      error: error => console.log(error)
    })
  }
}




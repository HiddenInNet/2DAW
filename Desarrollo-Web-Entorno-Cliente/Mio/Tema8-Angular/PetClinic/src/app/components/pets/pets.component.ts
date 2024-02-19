import { Component } from '@angular/core';
import { Pet } from '../../models/pet';
import { OwnerService } from '../../services/owner.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pets',
  standalone: true,
  imports: [],
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.scss'
})
export class PetsComponent {

  public pet: Pet;
  public pets: Array<Pet> = [];

  constructor(private peti: OwnerService, private ruta: Router, private activatedRoute: ActivatedRoute) {

    this.pet = <Pet>{};
  }

  ngOnInit() {


  }

}

import { Component } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DatePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [RouterLink, DatePipe, DecimalPipe],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent {

  public peliculas: Pelicula[] = [];

  constructor(private peti: PeliculaService, private ruta: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {

    this.peti.getPeliculas().subscribe({
      next: datos => {
        console.log("detalles de getInterpretes()", datos);

        this.peliculas = datos;
      },
      error: error => console.log(error),
    })
  }

  removePelicula(pelicula: Pelicula) {

    if (confirm("¿Do you want to remove '" + pelicula.nombre + "'?")) {
      this.peti.deletePelicula(pelicula.id).subscribe({
        next: datos => {
          console.log("detalles de deletePelicula()", datos);

          this.peliculas = datos;
        },
        error: error => console.log(error),
      })
    }
  }
}

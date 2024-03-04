import { Component } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Genero } from '../../models/genero';
import { Interprete } from '../../models/interprete';
import { InterpreteService } from '../../services/interprete.service';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-pelicula-form',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './pelicula-form.component.html',
  styleUrl: './pelicula-form.component.css'
})
export class PeliculaFormComponent {

  public interpretes: Interprete[] = [];
  public generos: Genero[] = [];
  public pelicula: Pelicula = <Pelicula>{};
  public textoBoton: string;

  constructor(private peti: PeliculaService, private petiInter: InterpreteService, private ruta: Router, private activatedRoute: ActivatedRoute) {

    this.textoBoton = "Añadir"
  }

  ngOnInit() {

    const pelicula_id = this.activatedRoute.snapshot.params["id"];

    //obtenemos todas las especialidades
    this.petiInter.getInterpretes().subscribe({
      next: datos => {
        this.interpretes = datos;
        //para cambiar el texto del botón si se añade o se modifica
        if (pelicula_id == -1) {
          this.textoBoton = "Añadir"
        } else {
          this.textoBoton = "Editar"
          //si se está editando hay que recuperar los datos del Vet para mostrarlos en el formulario
          this.peti.getPeliculaId(pelicula_id).subscribe({
            next: datos => {
              this.pelicula = datos;
              //cambiamos la referencia de las especialidades del vet
              this.pelicula.interpretes = environment.SeleccionarObjArray(this.interpretes, this.pelicula.interpretes);
              console.log("this.interpretes: ", this.interpretes);
              console.log("this.pelicula.interpretes: ", this.pelicula.interpretes);
            },
            error: error => console.log(error)
          })
        }

        this.peti.getGeneros().subscribe({
          next: datos => {
            console.log("generos", datos);

            this.generos = datos;

            this.pelicula.genero = environment.SeleccionarObj(this.generos, this.pelicula.genero) ?? this.pelicula.genero;
          },
          error: error => console.log(error)
        });
      },
      error: error => console.log(error)
    })
  }

  onSubmit(pelicula: Pelicula) {

    if (this.pelicula.id == -1) {

      this.peti.insertPelicula(pelicula).subscribe({
        next: datos => {
          console.log("Pelicula insertada");


        },
        error: error => console.log(error)
      })

      this.ruta.navigate(["/peliculas"])
    } else {

      console.log("Pelicula", pelicula);
      pelicula.id = this.pelicula.id

      this.peti.updatePelicula(pelicula).subscribe({
        next: datos => {
          console.log("Pelicula actualizada");



        },
        error: error => console.log(error)
      })

      this.ruta.navigate(["/peliculas"])
    }
  }
}

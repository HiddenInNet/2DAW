import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Interprete } from '../../models/interprete';
import { InterpreteService } from '../../services/interprete.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-interpretes',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './interpretes.component.html',
  styleUrl: './interpretes.component.css'
})
export class InterpretesComponent {

  public interpretes: Interprete[] = [];

  constructor(private peti: InterpreteService, private ruta: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {

    this.peti.getInterpretes().subscribe({
      next: datos => {
        console.log("detalles de getInterpretes()", datos);

        this.interpretes = datos;
      },
      error: error => console.log(error),
    })
  }

  removeInterprete(interprete: Interprete) {

    if (confirm("¿Do you want to remove '" + interprete.nombre + "'?")) {
      this.peti.deleteInterprete(interprete).subscribe({
        next: datos => {
          console.log("detalles de deleteInterprete()", datos);

          this.interpretes = datos;
        },
        error: error => console.log(error),
      })
    }
  }
}

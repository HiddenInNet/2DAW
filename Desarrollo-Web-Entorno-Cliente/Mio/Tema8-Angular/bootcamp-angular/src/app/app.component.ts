import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  // Metemos nuestro código
  // y nuestras funciones
  public titulo;

  public miObjeto;

  constructor() {
    this.titulo = "Girona 5 - 1 Sevilla";

    this.miObjeto = {
      dni: "41638946T",
      nombre: "David",
      edad: 20
    }
  }
}

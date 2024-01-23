import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  // Metemos nuestro código
  // y nuestras funciones

  public titulo: string;
  public miObjeto;
  public placeHolderBuscar: string = 'Escribe aquí';

  public msgEventSearch: string = '';

  constructor() {
    this.titulo = "Girona 5 - 1 Sevilla";

    this.miObjeto = {
      dni: "41638946T",
      nombre: "David",
      edad: 20
    }
  }

  search(event: any) {

    this.msgEventSearch = `${event.consulta} => ${event.resultado}`;

  }
}

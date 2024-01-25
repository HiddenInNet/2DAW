import { Component } from '@angular/core';
import { PAjaxService } from '../../servicios/p-ajax.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {

  public listaPer: any[] = [];
  public datosPlaneta: any = null;

  // Para usar un servicio lo debemos inyectar en el constructor
  constructor(private serviciopAjax: PAjaxService) {

    this.serviciopAjax.peticionInicial().subscribe(datos => {
      console.log("daticos", datos);

      this.listaPer = datos.results;
      console.log("resultados: ", this.listaPer);

    });
  };

  mostrarDatosPlaneta(dirPlaneta: string, evento: any) {
    console.log("dirPlaneta", dirPlaneta);
    console.log("evento", evento);

    this.serviciopAjax.peticion(dirPlaneta + "?format=json").subscribe(datos => {

      console.log("datos: ", datos);
      this.datosPlaneta = datos;
    });

    evento.preventDefault();
  };
}

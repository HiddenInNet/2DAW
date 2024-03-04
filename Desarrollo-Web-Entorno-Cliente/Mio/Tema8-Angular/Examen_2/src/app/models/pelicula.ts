import { Genero } from "./genero";
import { Interprete } from "./interprete";

export interface Pelicula {

    id: number;
    nombre: string;
    fecha: Date;
    sinopsis: string;
    genero: Genero;
    interpretes: Interprete[];
}
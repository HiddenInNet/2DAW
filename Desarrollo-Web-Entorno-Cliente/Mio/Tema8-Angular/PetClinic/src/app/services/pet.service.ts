import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private url: string = "http://localhost/pet_clinic/servicios.php";

  constructor(private http: HttpClient) { }

}

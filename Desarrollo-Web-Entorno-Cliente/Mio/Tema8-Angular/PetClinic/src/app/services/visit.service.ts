import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  private url: string = "http://localhost/pet_clinic/servicios.php";

  constructor(private http: HttpClient) { }
}

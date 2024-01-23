import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})

export class SearchComponent {

  public query: string;
  public result: string;

  @Input() labelButton: string = '';
  @Input() placeholder: string = '';

  @Output() searchEvent = new EventEmitter();

  constructor() {
    this.query = '';
    this.result = '';
  }

  ngOnInit() {

  }

  search() {
    this.result = `Respuesta realizada con query: ${this.query}`;
    this.searchEvent.emit(
      { 
        consulta: this.query, 
        resultado: this.result 
      }
    );
  }
}

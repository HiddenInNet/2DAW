import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDetalleComponent } from './lista-detalle.component';

describe('ListaDetalleComponent', () => {
  let component: ListaDetalleComponent;
  let fixture: ComponentFixture<ListaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaDetalleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPetComponent } from './crud-pet.component';

describe('CrudPetComponent', () => {
  let component: CrudPetComponent;
  let fixture: ComponentFixture<CrudPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudPetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

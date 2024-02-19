import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPetComponent } from './form-pet.component';

describe('FormPetComponent', () => {
  let component: FormPetComponent;
  let fixture: ComponentFixture<FormPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

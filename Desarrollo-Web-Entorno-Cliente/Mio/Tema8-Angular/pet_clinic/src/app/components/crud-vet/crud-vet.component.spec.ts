import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudVetComponent } from './crud-vet.component';

describe('CrudVetComponent', () => {
  let component: CrudVetComponent;
  let fixture: ComponentFixture<CrudVetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudVetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

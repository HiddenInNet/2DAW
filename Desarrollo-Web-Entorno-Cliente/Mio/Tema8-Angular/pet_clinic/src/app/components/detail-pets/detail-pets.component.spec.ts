import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPetsComponent } from './detail-pets.component';

describe('DetailPetsComponent', () => {
  let component: DetailPetsComponent;
  let fixture: ComponentFixture<DetailPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailPetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

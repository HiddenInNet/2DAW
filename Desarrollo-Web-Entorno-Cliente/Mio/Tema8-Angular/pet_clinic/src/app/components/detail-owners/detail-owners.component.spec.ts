import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOwnersComponent } from './detail-owners.component';

describe('DetailOwnersComponent', () => {
  let component: DetailOwnersComponent;
  let fixture: ComponentFixture<DetailOwnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailOwnersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

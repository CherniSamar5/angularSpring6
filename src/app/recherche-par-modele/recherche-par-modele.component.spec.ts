import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParModeleComponent } from './recherche-par-modele.component';

describe('RechercheParModeleComponent', () => {
  let component: RechercheParModeleComponent;
  let fixture: ComponentFixture<RechercheParModeleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheParModeleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheParModeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

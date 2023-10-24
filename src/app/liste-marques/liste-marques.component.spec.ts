import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMarquesComponent } from './liste-marques.component';

describe('ListeMarquesComponent', () => {
  let component: ListeMarquesComponent;
  let fixture: ComponentFixture<ListeMarquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeMarquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeMarquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNewUpdateMarqueComponent } from './my-new-update-marque.component';

describe('MyNewUpdateMarqueComponent', () => {
  let component: MyNewUpdateMarqueComponent;
  let fixture: ComponentFixture<MyNewUpdateMarqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyNewUpdateMarqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyNewUpdateMarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

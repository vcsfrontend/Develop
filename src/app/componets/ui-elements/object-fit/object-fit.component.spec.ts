import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectFitComponent } from './object-fit.component';

describe('ObjectFitComponent', () => {
  let component: ObjectFitComponent;
  let fixture: ComponentFixture<ObjectFitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjectFitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObjectFitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

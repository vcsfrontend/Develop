import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nested1Component } from './nested-1.component';

describe('Nested1Component', () => {
  let component: Nested1Component;
  let fixture: ComponentFixture<Nested1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nested1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Nested1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

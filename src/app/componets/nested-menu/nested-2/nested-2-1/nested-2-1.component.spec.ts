import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nested21Component } from './nested-2-1.component';

describe('Nested21Component', () => {
  let component: Nested21Component;
  let fixture: ComponentFixture<Nested21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nested21Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Nested21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

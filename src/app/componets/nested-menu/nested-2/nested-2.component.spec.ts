import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nested2Component } from './nested-2.component';

describe('Nested2Component', () => {
  let component: Nested2Component;
  let fixture: ComponentFixture<Nested2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nested2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Nested2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

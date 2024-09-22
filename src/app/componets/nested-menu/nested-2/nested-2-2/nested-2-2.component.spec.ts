import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nested22Component } from './nested-2-2.component';

describe('Nested22Component', () => {
  let component: Nested22Component;
  let fixture: ComponentFixture<Nested22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nested22Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Nested22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

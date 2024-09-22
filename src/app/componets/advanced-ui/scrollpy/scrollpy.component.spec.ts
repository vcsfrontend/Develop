import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollpyComponent } from './scrollpy.component';

describe('ScrollpyComponent', () => {
  let component: ScrollpyComponent;
  let fixture: ComponentFixture<ScrollpyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollpyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrollpyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

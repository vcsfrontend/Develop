import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionsCollapseComponent } from './accordions-collapse.component';

describe('AccordionsCollapseComponent', () => {
  let component: AccordionsCollapseComponent;
  let fixture: ComponentFixture<AccordionsCollapseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionsCollapseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccordionsCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

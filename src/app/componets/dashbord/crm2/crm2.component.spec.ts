import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRM2Component } from './crm2.component';

describe('CRM2Component', () => {
  let component: CRM2Component;
  let fixture: ComponentFixture<CRM2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CRM2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CRM2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

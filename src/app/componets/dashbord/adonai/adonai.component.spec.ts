import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdonaiComponent } from './adonai.component';

describe('AdonaiComponent', () => {
  let component: AdonaiComponent;
  let fixture: ComponentFixture<AdonaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdonaiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdonaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecceComponent } from './recce.component';

describe('RecceComponent', () => {
  let component: RecceComponent;
  let fixture: ComponentFixture<RecceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

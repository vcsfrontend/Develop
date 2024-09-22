import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderMaintanaceComponent } from './under-maintanace.component';

describe('UnderMaintanaceComponent', () => {
  let component: UnderMaintanaceComponent;
  let fixture: ComponentFixture<UnderMaintanaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderMaintanaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnderMaintanaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

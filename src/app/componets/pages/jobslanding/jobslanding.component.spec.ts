import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobslandingComponent } from './jobslanding.component';

describe('JobslandingComponent', () => {
  let component: JobslandingComponent;
  let fixture: ComponentFixture<JobslandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobslandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobslandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

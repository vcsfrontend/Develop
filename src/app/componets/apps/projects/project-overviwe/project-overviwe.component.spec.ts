import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectOverviweComponent } from './project-overviwe.component';

describe('ProjectOverviweComponent', () => {
  let component: ProjectOverviweComponent;
  let fixture: ComponentFixture<ProjectOverviweComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectOverviweComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectOverviweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

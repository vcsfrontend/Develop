import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypograpyComponent } from './typograpy.component';

describe('TypograpyComponent', () => {
  let component: TypograpyComponent;
  let fixture: ComponentFixture<TypograpyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypograpyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypograpyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

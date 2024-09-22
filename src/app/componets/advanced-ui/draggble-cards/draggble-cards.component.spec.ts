import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggbleCardsComponent } from './draggble-cards.component';

describe('DraggbleCardsComponent', () => {
  let component: DraggbleCardsComponent;
  let fixture: ComponentFixture<DraggbleCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DraggbleCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DraggbleCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

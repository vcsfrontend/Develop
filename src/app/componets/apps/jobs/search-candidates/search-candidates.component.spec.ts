import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCondidatesComponent } from './search-candidates.component';

describe('SearchCondidatesComponent', () => {
  let component: SearchCondidatesComponent;
  let fixture: ComponentFixture<SearchCondidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchCondidatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchCondidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

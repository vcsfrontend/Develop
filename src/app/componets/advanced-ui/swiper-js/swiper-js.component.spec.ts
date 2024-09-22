import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperJsComponent } from './swiper-js.component';

describe('SwiperJsComponent', () => {
  let component: SwiperJsComponent;
  let fixture: ComponentFixture<SwiperJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwiperJsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwiperJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

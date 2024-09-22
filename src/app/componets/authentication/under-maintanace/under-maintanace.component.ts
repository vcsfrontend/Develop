import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Renderer2,Inject } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-under-maintanace',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './under-maintanace.component.html',
  styleUrl: './under-maintanace.component.scss'
})
export class UnderMaintanaceComponent {
  constructor(@Inject(DOCUMENT) private document: Document,private elementRef: ElementRef,
  private renderer: Renderer2){
    document.body.classList.add('coming-soon-main');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('coming-soon-main');    
  }
  days!: number ;
  hours!: number;
  mins!: number;
  secs!: number;
  ngOnInit(): void {
    setInterval(() => {
      this.updateTimer();
    }, 1000);
  }

  updateTimer() {
    const future = new Date("Dec 19, 2025 11:30:00");
    const now = new Date();
    const diff = future.getTime() - now.getTime();

    this.days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const remainingHours = diff % (1000 * 60 * 60 * 24);
    this.hours = Math.floor(remainingHours / (1000 * 60 * 60));
    const remainingMinutes = remainingHours % (1000 * 60 * 60);
    this.mins = Math.floor(remainingMinutes / (1000 * 60));
    const remainingSeconds = remainingMinutes % (1000 * 60);
    this.secs = Math.floor(remainingSeconds / 1000);
  }
}

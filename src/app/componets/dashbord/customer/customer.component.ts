import { Component, ElementRef, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/common/sharedmodule';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [RouterModule,SharedModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent {
constructor(private elementRef:ElementRef,private renderer:Renderer2 ){
  const htmlElement =
  this.elementRef.nativeElement.ownerDocument.documentElement;
const bodyElement = document.body;
  this.renderer.setAttribute(htmlElement, 'data-nav-style', 'menu-click');
  this.renderer.setAttribute(htmlElement, 'data-toggled', 'close');
  this.renderer.removeClass(bodyElement, 'sidebar-mini');
  this.renderer.setAttribute(htmlElement, 'data-nav-layout', 'horizontal');
}
ngOnDestroy(): void {
  const htmlElement =
  this.elementRef.nativeElement.ownerDocument.documentElement;
const bodyElement = document.body;
  this.renderer.removeAttribute(htmlElement, 'data-nav-style', 'menu-click');
  this.renderer.removeAttribute(htmlElement, 'data-toggled', 'close');
  this.renderer.removeClass(bodyElement, 'sidebar-mini');
  this.renderer.setAttribute(htmlElement, 'data-nav-layout', 'vertical');
  
} 
}

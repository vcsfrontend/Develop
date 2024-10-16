import { Directive,TemplateRef, ElementRef, HostListener, OnChanges } from '@angular/core';

@Directive({
  selector: '[appShowCodeContent]',
  standalone: true
})
export class ShowCodeContentDirective {

  // constructor(public templateRef: TemplateRef<any>) { }
  constructor(private el: ElementRef) { }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: any) {
    var value = event.target.value;
    if (value.length === 0 && event.which === 32) event.preventDefault();
  }

}

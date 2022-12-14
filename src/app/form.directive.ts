import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[focusInvalidInput]'
  })
  export class FormDirective {
  
    constructor(private el: ElementRef) { }
  
    @HostListener('submit')
    onFormSubmit() {
      const invalidControl = this.el.nativeElement.querySelector('.ng-invalid');
  
      if (invalidControl) {
        invalidControl.focus();  
      }
    }
  }
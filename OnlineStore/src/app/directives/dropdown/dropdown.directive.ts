import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({

selector: '[appCustomdropdown]',
})
export class DropdownDirective {

  constructor() { }
  private isOpen = false;
  @HostBinding('class.show') get opened() {
    return this.isOpen;
  }
  @HostListener('mouseover') open() {
    this.isOpen = true;
  }
  @HostListener('mouseleave') close() {
    this.isOpen = false;
  }
}


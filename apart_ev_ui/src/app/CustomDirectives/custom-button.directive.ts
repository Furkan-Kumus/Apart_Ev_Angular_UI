import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustomButton]'
})
export class CustomButtonDirective implements OnInit {
  @Input() appCustomButton!: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.appCustomButton === 'thisIsACustomDirective') {
      this.el.nativeElement.style.backgroundColor = 'red';
      this.el.nativeElement.style.color = 'white';
    } else {
      this.el.nativeElement.style.backgroundColor = 'black';
      this.el.nativeElement.style.color = 'white';
    }
  } 
}

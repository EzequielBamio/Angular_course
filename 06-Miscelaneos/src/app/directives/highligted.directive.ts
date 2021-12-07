import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighligted]'
})
export class HighligtedDirective {

  @Input("appHighligted") newColor: string;
  
  constructor( private element: ElementRef ) 
  {
    // this.element.nativeElement.style.backgroundColor = "green";
  }
  
  
  @HostListener('mouseenter') mouseEnter()
  {
    this.highLight( this.newColor || 'green' );
  }

  @HostListener('mouseleave') mouseLeave()
  {
    this.highLight( null );
  }

  private highLight( color: string )
  {
    this.element.nativeElement.style.backgroundColor = color;
  }

}

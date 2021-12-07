import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="size">
      Hello wolrd... It is a label.
    </p>

    <button class="btn btn-primary m-1" (click)="size = size + 5">
      <i class="fa fa-plus"></i>
    </button>
    <button class="btn btn-primary" (click)="size = size - 5">
      <i class="fa fa-minus"></i>
    </button>

  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  size:number = 30;

  constructor() { }

  ngOnInit(): void {
  }

}

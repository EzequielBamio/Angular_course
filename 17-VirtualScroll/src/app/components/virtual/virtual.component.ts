import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  @ViewChild( CdkVirtualScrollViewport ) viewport!: CdkVirtualScrollViewport;

  people = Array(500).fill(0);
  

  constructor() { }

  ngOnInit(): void {
  }

  goEnd()
  {
    this.viewport.scrollToIndex( this.people.length );
  }

  goStart()
  {
    this.viewport.scrollToIndex( 0 );
  }

  goCenter()
  {
    this.viewport.scrollToIndex( this.people.length / 2 );
  }

}

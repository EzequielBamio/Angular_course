import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html'
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number = 0;

  @Output() heroeSelect: EventEmitter<number>;

  constructor( private router: Router ) 
  {
    this.heroeSelect = new EventEmitter();
  }

  ngOnInit(): void {
  }

  showHeroe()
  {
    this.router.navigate(['/heroe', this.index]);
    // this.heroeSelect.emit( this.index );
  }

}

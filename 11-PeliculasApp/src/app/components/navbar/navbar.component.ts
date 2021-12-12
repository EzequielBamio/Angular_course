import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  searchFilm( text:string ){

    text = text.trim();

    if(text.length === 0){ return; }

    this.router.navigate( ['/search', text] );

  }
}

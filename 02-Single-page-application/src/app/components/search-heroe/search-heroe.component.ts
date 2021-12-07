import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../service/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-heroe',
  templateUrl: './search-heroe.component.html',
})
export class SearchHeroeComponent implements OnInit {

  heroes: any[] = [];
  value: string = "";

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService) 
  {

  }

  ngOnInit(): void 
  {
    this.activatedRoute.params.subscribe( params => {
      console.log(params['value']);
      this.value = params['value'];  
      this.heroes = this._heroesService.searchHeroes( params['value'] );
    });
  }

}

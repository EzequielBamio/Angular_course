import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroeModel } from '../../models/heroe.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes: HeroeModel[] = [];
  loading: boolean = false;

  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {
    this.loading = true;
    this.heroesService.getHeroes().subscribe( resp => 
    {
      this.heroes = resp 
      this.loading = false;
    });
  }

  deleteHeroe( heroe: HeroeModel, i: number )
  {

    Swal.fire({
      title: 'Are you sure?',
      text: `Are you sure you want to delete ${heroe.name}`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {

      if(resp.value)
      {
        if(heroe.id !== undefined)
        {
          this.heroes.splice(i, 1);
          this.heroesService.deleteHeroe( heroe.id ).subscribe();
        }
      }
    });

   
  }

}

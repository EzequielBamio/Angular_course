import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeroeModel } from '../../models/heroe.model';
import { HeroesService } from '../../services/heroes.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe = new HeroeModel();

  constructor( private heroeService: HeroesService,
               private route: ActivatedRoute ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id !== 'new' && id !== null)
    {
      this.heroeService.getHeroe( id ).subscribe( (resp: any) => {
        this.heroe = resp;
        this.heroe.id = id;
      });
    }
  }

  save( form: NgForm ){

    if(form.invalid)
    {
      console.log('form no valid');
      return;
    }

    Swal.fire({
      title: 'Wait',
      text: 'Saving information',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let petition: Observable<any>;

    if( this.heroe.id )
    {
      petition = this.heroeService.updateHeroe( this.heroe );
    }else
    {
      petition = this.heroeService.createHeroe( this.heroe );
    }

    petition.subscribe( resp => {

      Swal.fire({
        title: this.heroe.name,
        text: 'Update success!',
        icon: 'success'
      });

    });

  }

}

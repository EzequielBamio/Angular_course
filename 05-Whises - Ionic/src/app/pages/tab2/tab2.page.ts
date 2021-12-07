import { Component } from '@angular/core';
import { WishesService } from '../../services/wishes.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor( public wishesService: WishesService ) 
  {

  }

}

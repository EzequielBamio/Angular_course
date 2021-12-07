import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { List } from 'src/app/models/list.model';
import { WishesService } from '../../services/wishes.service';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @ViewChild( IonList ) list: IonList;
  @Input() finished = true;
  lists: List[] = [];

  constructor( public wishesService: WishesService,
               private router: Router,
               private alertCtrl: AlertController) 
  { }

  ngOnInit() {}


  listSelected( list: List )
  {
    if( this.finished ){
      this.router.navigateByUrl(`/tabs/tab2/add/${ list.id }`);
    }else
    {
      this.router.navigateByUrl(`/tabs/tab1/add/${ list.id }`);
    }
  }

  deleteList( list: List )
  {
    this.wishesService.deleteList( list );
  }

  async updateList( list: List )
  {
      const alert = await this.alertCtrl.create({
        header: 'Update list',
        inputs: [
          {
          name: 'title',
          type: 'text',
          value: list.title,
          placeholder: 'Title update'
        }],
        buttons: [
          {
          text: 'Cancel',
          role: 'cancel',
          handler: () => this.list.closeSlidingItems()
        },
        {
          text: 'Update',
          handler: ( data ) => {
            if(data.title.length === 0)
            {
              return;
            }

            list.title = data.title;
            this.wishesService.guardStorage();
            this.list.closeSlidingItems();
          }
        }]
      });
      alert.present();
  }

}

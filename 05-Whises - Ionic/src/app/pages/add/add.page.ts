import { Component, OnInit } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { ActivatedRoute } from '@angular/router'
import { ListItem } from 'src/app/models/list-item.model';
import { List } from 'src/app/models/list.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  list: List;
  nameItem = '';

  constructor( private wishesService: WishesService,
               private router: ActivatedRoute) 
  {
    const listId = this.router.snapshot.paramMap.get('listId');

    this.list = this.wishesService.getList( listId );
  }

  ngOnInit() {
  }

  addItem()
  {
    if(this.nameItem.length === 0)
    {
      return;
    }

    const newItem = new ListItem( this.nameItem );
    this.list.items.push(newItem);

    this.nameItem = '';
    this.wishesService.guardStorage();
  }

  deleteItem( i: number )
  {
    this.list.items.splice(i, 1);
    this.wishesService.guardStorage();
  }

  updateCheck( item: ListItem )
  {
    const pending = this.list.items.filter( itemData => !itemData.completed).length;

    if(pending === 0)
    {
      this.list.finishedIn = new Date();
      this.list.finished = true;
    }else
    {
      this.list.finishedIn = null;
      this.list.finished = false;
    }

    this.wishesService.guardStorage();
  }

}

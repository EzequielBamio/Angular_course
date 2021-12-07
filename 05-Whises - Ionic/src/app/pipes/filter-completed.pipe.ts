import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../models/list.model';

@Pipe({
  name: 'filterCompleted',
  pure: false
})
export class FilterCompletedPipe implements PipeTransform {

  transform(lists: List[], completed: boolean = true): List[] 
  {
    return lists.filter( list => list.finished === completed );
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterCompletedPipe } from './filter-completed.pipe';



@NgModule({
  declarations: [FilterCompletedPipe],
  exports: [FilterCompletedPipe]
})
export class PipesModule { }

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {

  transform(img: string | null): string {
  
    if( img ){
      return `https://image.tmdb.org/t/p/original${ img }`
    }

    return './assets/img/no-image.jpg';
  }

}

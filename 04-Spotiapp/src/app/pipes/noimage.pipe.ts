import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(img: any[]): string {

    if(img.length > 0)
    {
      return img[0].url;
    }

    return 'assets/img/noimage.png';
  }

}

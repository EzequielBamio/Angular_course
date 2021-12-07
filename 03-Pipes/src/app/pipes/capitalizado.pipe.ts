import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, all: boolean = true): string {
    
    value = value.toLocaleLowerCase(); //all lowercase
    let names = value.split(' '); //return names. When found a separator, guard name.
    if( all )
    {
      names = names.map( name => {
        return name[0].toUpperCase() + name.substr(1);
      })
    }else
    {
      names[0] = names[0][0].toUpperCase() + names[0].substr(1);
    }

    return names.join(' ');
  }

}

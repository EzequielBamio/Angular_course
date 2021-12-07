import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, enable: boolean): string {
    return ( enable ) ? value : '*'.repeat( value.length );
    }

}

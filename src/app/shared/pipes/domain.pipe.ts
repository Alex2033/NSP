import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'domain'
})
export class DomainPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/(^\w+:|^)\/\//, '');
  }

}

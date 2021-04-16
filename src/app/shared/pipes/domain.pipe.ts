import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'domain',
  pure: true
})
export class DomainPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/(^\w+:|^)\/\//, '').split('?')[0];
  }

}

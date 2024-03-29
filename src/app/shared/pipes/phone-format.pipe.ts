import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat',
  pure: true
})

export class PhoneFormatPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return value ? value.replace(/[^+0-9]/gim, '') : null;
  }
}

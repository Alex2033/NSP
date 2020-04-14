import {Pipe, PipeTransform} from '@angular/core';
import {DatePipe} from '@angular/common';

@Pipe({
  name: 'niceDate',
  pure: true
})
export class NiceDatePipe implements PipeTransform {

  transform(value: number) {
    const date = new Date(value);
    const currentDate = new Date();

    if (date.getFullYear().toString() + date.getMonth().toString() + date.getDate().toString() === currentDate.getFullYear().toString() + currentDate.getMonth().toString() + currentDate.getDate().toString()) {
      return 'Сегодня';
    }

    currentDate.setDate(currentDate.getDate() - 1);

    if (date.getFullYear().toString() + date.getMonth().toString() + date.getDate().toString() === currentDate.getFullYear().toString() + currentDate.getMonth().toString() + currentDate.getDate().toString()) {
      return 'Вчера';
    }
    const datePipe = new DatePipe('ru-RU');
    return datePipe.transform(value, 'd MMMM');
  }

}

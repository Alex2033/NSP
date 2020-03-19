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
    if (date.getFullYear() + date.getMonth() + date.getDate() === currentDate.getFullYear() + currentDate.getMonth() + currentDate.getDate()) {
      return 'Сегодня';
    }
    date.setDate(date.getDate() - 1);

    if (date.getFullYear() + date.getMonth() + date.getDate() === currentDate.getFullYear() + currentDate.getMonth() + currentDate.getDate()) {
      return 'Вчера';
    }

    const datePipe = new DatePipe('ru-RU');
    return datePipe.transform(value, 'd MMMM');
  }

}

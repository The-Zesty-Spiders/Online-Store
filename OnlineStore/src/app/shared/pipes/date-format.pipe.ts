import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({name: 'dateFormat'})
export class DateFormatPipe implements PipeTransform {

  transform(value: string) {
    const datePipe = new DatePipe('en-BG');
    value = datePipe.transform(value, 'dd/MM/yyyy/hh:mm a');

    return value;
  }
}

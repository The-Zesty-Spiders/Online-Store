import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'propertyFormat'
})
export class PropertyFormatPipe implements PipeTransform {

  transform(value: any) {
    if (value === null ||
        (typeof(value) === 'string' && value === '')) {
      value = '-';
    }

    return value;
  }
}

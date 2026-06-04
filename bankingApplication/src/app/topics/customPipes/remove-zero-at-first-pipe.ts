import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeZeroAtFirst',
})
export class RemoveZeroAtFirstPipe implements PipeTransform {
  transform(value: any): string {
    if (value == null) return '';
    const strValue = String(value);   // 👈 convert to string
    return strValue.startsWith('0') ? strValue.substring(1) : strValue;
  }
}

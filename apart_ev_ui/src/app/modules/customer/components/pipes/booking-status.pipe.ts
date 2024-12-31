import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookingStatus'
})
export class BookingStatusPipe implements PipeTransform {
  transform(value: string, type: 'text' | 'color'): string {
    switch (type) {
      case 'text':
        switch (value) {
          case 'APPROVED': return 'Onaylandı';
          case 'REJECTED': return 'Reddedildi';
          case 'PENDING': return 'Beklemede';
          default: return 'Bilinmiyor';
        }
      case 'color':
        switch (value) {
          case 'APPROVED': return 'green';
          case 'REJECTED': return 'red';
          case 'PENDING': return 'blue';
          default: return 'black';
        }
      default: return '';
    }
  }
}

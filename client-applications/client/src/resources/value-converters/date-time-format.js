import moment from 'moment';

export class DateTimeFormatValueConverter {
  toView(value, format = 'M/D/YYYY') {
    if (!value) {
      return '-';
    }
    return moment(value).format(format);
  }
}

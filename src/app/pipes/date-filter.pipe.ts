import { Pipe, PipeTransform } from '@angular/core';
import {Todo} from '../dto/todo';

@Pipe({
  name: 'dateFilter'
})
export class DateFilterPipe implements PipeTransform {

  transform(value: Todo[], date: string): Todo[] {
    return value.filter((t: Todo) => {
      return t.createdAt.toLowerCase().indexOf(date) !== -1;
    });
  }

}

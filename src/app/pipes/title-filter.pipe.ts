import { Pipe, PipeTransform } from '@angular/core';
import {Todo} from '../dto/todo';

@Pipe({
  name: 'titleFilter'
})
export class TitleFilterPipe implements PipeTransform {

  transform(value: Todo[], text: string): Todo[] {
    return value.filter((t: Todo) => {
      return t.title.toLowerCase().indexOf(text) !== -1;
    });
  }
}

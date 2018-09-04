import { Pipe, PipeTransform } from '@angular/core';
import {Todo} from '../dto/todo';

@Pipe({
  name: 'toSet'
})
export class ToSetPipe implements PipeTransform {

  public transform(list: any[], filedName: string): Set<any> {
    const set: Set<any> = new Set<any>();
    list.forEach((item: Todo) => {
      const i = item[filedName];

      if (!i) {
        return new Set();
      }

      set.add(i);
    });

    return set;
  }

}

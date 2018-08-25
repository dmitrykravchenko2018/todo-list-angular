import {Todo} from '../entities/todo';
import { Injectable } from '@angular/core';
import { TODO_LIST } from '../mock/mock-todo';
import { Subject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoList: Todo[] = TODO_LIST;

  private todoSubject: Subject<Todo> = new Subject<Todo>();

  constructor() { }

  public getTodoList(): Observable<Todo[]> {
    return of(this.todoList);
  }

  public getTodoEdit(): Observable<Todo> {
    return this.todoSubject.asObservable();
  }
}

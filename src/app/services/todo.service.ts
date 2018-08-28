import {Todo} from '../entities/todo';
import { Injectable } from '@angular/core';
import { TODO_LIST } from '../mock/mock-todo';
import { Subject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoList: Todo[] = TODO_LIST;

  private editItem: Subject<Todo> = new Subject<Todo>();

  constructor() {
  }

  public getTodoList(): Todo[] {
    return this.todoList;
  }

  public getDatesList(): Set<string> {
    const dateList: Set<string> = new Set<string>();
    this.todoList.forEach((item: Todo) => {
      dateList.add(item.createdAt);
    });
    return dateList;
  }

  public getTodo(id: number): Todo {
    return this.todoList.find((item: Todo) => {
      return (item.id === id);
    });
  }

  public addTodo(todo: Todo): void {
    this.todoList.push(todo);
  }

  public updateTodo(todo: Todo): void {
    const idx: number = this.todoList.findIndex((item: Todo) => {
      return (item.id === todo.id);
    });
    if (idx > 0) {
      this.todoList[idx].title = todo.title;
      this.todoList[idx].description = todo.description;
    }
  }

  public deleteTodo(todo: Todo): void {
    console.log('Service delete:', todo);
    this.todoList = this.todoList.filter(t => t !== todo);
  }

  public editTodo(todo: Todo): void {
    this.editItem.next(todo);
  }

  public getEditableItem(): Observable<Todo> {
    return this.editItem.asObservable();
  }
}

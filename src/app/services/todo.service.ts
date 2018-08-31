import {Todo} from '../entities/todo';
import { Injectable } from '@angular/core';
import { TODO_LIST } from '../mock/mock-todo';
import { Subject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Todo[] = TODO_LIST;

  private editItem: Subject<Todo> = new Subject<Todo>();

  constructor() {
  }

  public get todoList(): Todo[] {
    return this.todos;
  }

  public getDatesList(): Set<string> {
    const dateList: Set<string> = new Set<string>();
    this.todos.forEach((item: Todo) => {
      dateList.add(item.createdAt);
    });
    return dateList;
  }

  public getTodo(id: number): Todo {
    return this.todos.find((item: Todo) => {
      return (item.id === id);
    });
  }

  public addTodo(todo: Todo): void {
    this.todos.push(todo);
  }

  public updateTodo(todo: Todo): void {
    const { title, description } = todo;

    for (let i = 0, length = this.todos.length; i < length; i++) {
      const t: Todo = this.todos[i];
      if (t.id === todo.id) {
        t.title = title;
        t.description = description;
        break;
      }
    }

  }

  public deleteTodo(todo: Todo): void {
    console.log('Service delete:', todo);
    this.todos = this.todos.filter((t: Todo) => t.id !== todo.id);
  }

  public editTodo(todo: Todo): void {
    this.editItem.next(todo);
  }

  public getEditableItem(): Observable<Todo> {
    return this.editItem.asObservable();
  }
}

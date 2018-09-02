import {Todo} from '../../dto/todo';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input()
  public todoList: Todo[];

  @Output()
  public delete: EventEmitter<Todo> = new EventEmitter<Todo>();

  @Output()
  public edit: EventEmitter<Todo> = new EventEmitter<Todo>();

  public selectedTodo: Todo;

  constructor() {
  }

  public ngOnInit(): void {
  }

  public onSelect(todo: Todo): void {
    this.selectedTodo = todo;
  }

  public deleteTodo(todo: Todo): void {
    console.log('Todo-list component delete:', todo);
    this.delete.emit(todo);
  }

  public editTodo(todo: Todo): void {
    // this.todoService.updateTodo(todo);
    this.delete.emit(todo);
  }
}

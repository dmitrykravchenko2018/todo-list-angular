import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../dto/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  public todo: Todo;

  @Output()
  public delete: EventEmitter<Todo> = new EventEmitter<Todo>();

  @Output()
  public edit: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() {
  }

  ngOnInit() {
  }

  public onEdit(todo: Todo): void {
    this.edit.emit(todo);
  }

  public onDelete(todo: Todo): void {
    this.delete.emit(todo);
  }
}

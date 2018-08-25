import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../entities/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  private todo: Todo;

  @Output()
  private delete: EventEmitter<Todo> = new EventEmitter<Todo>();

  @Output()
  private edit: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {
  }

  public onDelete(todo: Todo): void {
    this.delete.emit(todo);
  }

  public onEdit(): void {
    this.edit.emit(this.todo);
  }

}

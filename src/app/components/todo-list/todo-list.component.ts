import {Todo} from '../../dto/todo';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todoList: Todo[];
  public selectedTodo: Todo;

  constructor(private todoService: TodoService) {
  }

  public ngOnInit(): void {
    this.todoService.getTodoList().subscribe((items: Todo[]) => {
      console.log('subscribe:', items);
      this.todoList = items;
    });
  }

  public onSelect(todo: Todo): void {
    this.selectedTodo = todo;
  }

  public deleteTodo(todo: Todo): void {
    console.log('Todo-list component delete:', todo);
    this.todoService.deleteTodo(todo);
  }

  public editTodo(todo: Todo): void {
    // this.todoService.updateTodo(todo);
    this.todoService.editTodo(todo);
  }
}

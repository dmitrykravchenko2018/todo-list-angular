import {Todo} from '../../entities/todo';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  private todoList: Todo[] = [];

  private selectedTodo: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodoList();
  }

  public getTodoList(): void {
    this.todoService.getTodoList()
    .subscribe((todoList: Todo[]) => {
        this.todoList = todoList;
    });
  }

  public onSelect(todo: Todo): void {
    this.selectedTodo = todo;
  }

  public onDelete(todo: Todo): void {

    console.log('deleting todo', todo);
  }

  public onEdit(todo: Todo): void {
    console.log('editing todo', todo);
  }
}

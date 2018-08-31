import { Component, OnInit } from '@angular/core';
import { Todo } from '../../entities/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  public dateList: Set<string>;
  public editableItem: Todo;
  private editingItem: boolean;

  constructor(public todoService: TodoService) {
  }

  ngOnInit() {
    this.dateList = this.todoService.getDatesList();
    this.todoService.getEditableItem().subscribe((item: Todo) => {
      console.log('subscribe: ', item);
      this.editableItem = item;
      this.editingItem = true;
    });
  }

  public handleSubmit(todo: Todo): void {
    if (this.editingItem) {
      this.todoService.updateTodo(todo);
      this.editingItem = !this.editingItem;
    } else {
      this.todoService.addTodo(todo);
    }
  }
}

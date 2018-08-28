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

  constructor(public todoService: TodoService) { }

  ngOnInit() {
    this.dateList = this.todoService.getDatesList();
    this.todoService.getEditableItem().subscribe((item: Todo) => {
      console.log('subscribe: ', item);
      this.editableItem = item;
    });
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../../entities/todo';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  @Input()
  public set data(item: Todo) {
    console.log('Setter: ', item);
    if (item) {
      this.addForm.patchValue({ id: item.id, title: item.title, description: item.description });
    }
  }

  @Output()
  public submit: EventEmitter<Todo> = new EventEmitter<Todo>();

  public addForm: FormGroup = this.fb.group({
    id: null,
    title: ['', Validators.required],
    description: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {  }

  public creteOrEditTodo(id: number, title: string, description: string): Todo {
    const trimTitle = title.trim();
    const trimDescription = description.trim();

    const date: Date = new Date();
    const normalizeDate: string = `${date.getFullYear()}-${date.getDay()}-${date.getMonth()}`;
    const newId: number = id ? id : Math.floor(Math.random() * 100);
    return new Todo(id, title, description, normalizeDate);
  }

  public onSubmit(): void {
    const { id, title, description } = this.addForm.value;

    if (!!title && !!description) {
      console.log('title: ', title);
      console.log('description: ', description);
      this.submit.emit(this.creteOrEditTodo(id, title, description));
    }
    this.addForm.reset();
    this.addForm.markAsPristine();
  }

}

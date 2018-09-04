import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../../dto/todo';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddFormComponent implements OnInit {

  @Input()
  public set data(item: Todo) {
    if (item) {
      this.addForm.patchValue({ id: item.id, title: item.title, description: item.description });
    }
  }

  @Output()
  public submitForm: EventEmitter<Todo> = new EventEmitter<Todo>();

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
    const normalizeDate = `${date.getFullYear()}-${date.getDate()}-${date.getMonth()}`;
    const newId: number = id ? id : Math.floor(Math.random() * 100);
    return new Todo(id, title, description, normalizeDate);
  }

  public onSubmit(): void {
    const { id, title, description } = this.addForm.value;

    if (!!title && !!description) {
      console.log('title: ', title);
      console.log('description: ', description);
      const newId: number = id ? id : Math.floor(Math.random() * 100);
      this.submitForm.emit(this.creteOrEditTodo(newId, title, description));
    }
    this.addForm.reset();
    this.addForm.markAsPristine();
  }

}

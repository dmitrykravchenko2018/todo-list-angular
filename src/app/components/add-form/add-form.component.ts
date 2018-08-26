import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  private addForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) { }

  public ngOnInit(): void {
  }

  public onSubmit(): void {
    console.warn(this.addForm.value);
  }

}

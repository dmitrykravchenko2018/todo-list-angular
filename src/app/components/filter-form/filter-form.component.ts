import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css']
})
export class FilterFormComponent implements OnInit, OnDestroy {
  @Input()
  public dates: string[];

  @Output()
  public filterTerm: EventEmitter<{title: string, date: string}> = new EventEmitter();

  private titleChangedSub: Subscription;

  public filterForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    date: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.titleChangedSub = this.filterForm.get('title')
      .valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe(() => this.submitForm(this.filterForm));
  }

  public ngOnDestroy(): void {
    this.titleChangedSub.unsubscribe();
  }

  public submitForm(form: FormGroup) {
    console.log('Submitting form', form.value);
    this.filterTerm.emit(form.value);
  }
}

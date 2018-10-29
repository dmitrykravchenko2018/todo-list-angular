import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { AddFormComponent } from './components/add-form/add-form.component';
import { FilterFormComponent } from './components/filter-form/filter-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoService } from './services/todo.service';
import { DateFilterPipe } from './pipes/date-filter.pipe';
import { TitleFilterPipe } from './pipes/title-filter.pipe';
import { ToSetPipe } from './pipes/to-set.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    SideBarComponent,
    AddFormComponent,
    FilterFormComponent,
    DateFilterPipe,
    TitleFilterPipe,
    ToSetPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

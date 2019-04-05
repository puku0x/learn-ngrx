import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatListModule,
  MatInputModule
} from '@angular/material';

import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';

/**
 * Presentational components
 */
const components = [
  TodoFormComponent,
  TodoListComponent,
  TodoListItemComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatListModule,
    MatInputModule
  ],
  exports: [...components],
  declarations: [...components]
})
export class TodoComponentsModule {}

import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { Todo } from '../../../models';
import { TodoFacade } from '../../store/facades';

@Component({
  selector: 'app-todo-create-dialog',
  templateUrl: './todo-create-dialog.component.html',
  styleUrls: ['./todo-create-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoCreateDialogComponent implements OnInit {
  loading$: Observable<boolean>;
  form: FormGroup;

  constructor(private fb: FormBuilder, private todoService: TodoFacade) {
    this.loading$ = this.todoService.loading$;
  }

  ngOnInit() {
    this.form = this.fb.group({
      text: ['', Validators.required]
    });
  }

  save() {
    const text: string = this.form.get('text').value;
    const todo: Partial<Todo> = {
      text
    };
    this.todoService.create(todo);
  }
}

import {
  Component,
  ChangeDetectionStrategy,
  EventEmitter,
  OnInit,
  OnDestroy
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { Todo } from '../../../models';
import { TodoFacade } from '../../store/facades';

@Component({
  selector: 'app-todo-edit-dialog',
  templateUrl: './todo-edit-dialog.component.html',
  styleUrls: ['./todo-edit-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoEditDialogComponent implements OnInit, OnDestroy {
  private readonly onDestroy$ = new EventEmitter();
  loading$: Observable<boolean>;
  todo$: Observable<Todo>;
  form: FormGroup;
  todo: Todo;

  constructor(private fb: FormBuilder, private todoService: TodoFacade) {
    this.loading$ = this.todoService.loading$;
    this.todo$ = this.todoService.todo$;
  }

  ngOnInit() {
    this.form = this.fb.group({
      text: ['', Validators.required]
    });

    this.todo$
      .pipe(
        filter(todo => !!todo),
        takeUntil(this.onDestroy$)
      )
      .subscribe(todo => {
        this.todo = todo;
        this.form.setValue({
          text: this.todo.text
        });
      });
  }

  ngOnDestroy() {
    this.onDestroy$.emit();
  }

  save() {
    const text: string = this.form.get('text').value;
    const todo = { ...this.todo, text };
    if (!todo.id) {
      this.todoService.create(todo);
    } else {
      this.todoService.update(todo);
    }
  }
}

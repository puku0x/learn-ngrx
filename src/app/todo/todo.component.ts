import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Todo } from '../models';
import { TodoFacade } from './store';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  title = 'learn-ngrx';
  loading$: Observable<boolean>;
  todos$: Observable<Todo[]>;

  /**
   * Constructor
   */
  constructor(private todoService: TodoFacade) {
    this.loading$ = this.todoService.loading$;
    this.todos$ = this.todoService.todos$;
  }

  /**
   * Initialize
   */
  ngOnInit() {
    this.todoService.loadAll();
  }

  /**
   * Create
   */
  onCreate(todo: Partial<Todo>) {
    this.todoService.create(todo);
  }

  /**
   * Update
   */
  onUpdate(todo: Todo) {
    this.todoService.update(todo);
  }

  /**
   * Remove
   */
  onRemove(id: string) {
    this.todoService.remove(id);
  }
}

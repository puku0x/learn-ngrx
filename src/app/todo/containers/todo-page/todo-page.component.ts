import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Todo } from '../../../models';
import { TodoFacade } from '../../store/facades';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {
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
   * Show create dialog
   */
  showCreateDialog() {
    this.todoService.showCreateDialog();
  }

  /**
   * Show edit dialog
   */
  showEditDialog(todo: Todo) {
    this.todoService.showEditDialog(todo);
  }

  /**
   * Show remove dialog
   */
  showRemoveDialog(id: string) {
    this.todoService.showRemoveDialog(id);
  }
}

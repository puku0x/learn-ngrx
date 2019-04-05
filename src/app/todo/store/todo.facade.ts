import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';

import { Todo } from '../../models';
import { State } from './state';
import * as TodoSelectors from './selectors';
import * as TodoActions from './actions';

@Injectable()
export class TodoFacade {
  loading$ = this.store.pipe(select(TodoSelectors.getLoading));
  todos$ = this.store.pipe(select(TodoSelectors.getTodos));
  loadAllSuccess$ = this.actions$.pipe(ofType(TodoActions.loadAllSuccess.type));
  loadAllFailure$ = this.actions$.pipe(ofType(TodoActions.loadAllFailure.type));
  loadSuccess$ = this.actions$.pipe(ofType(TodoActions.loadSuccess.type));
  loadFailure$ = this.actions$.pipe(ofType(TodoActions.loadFailure.type));
  createSuccess$ = this.actions$.pipe(ofType(TodoActions.createSuccess.type));
  createFail$ = this.actions$.pipe(ofType(TodoActions.createFailure.type));
  updateSuccess$ = this.actions$.pipe(ofType(TodoActions.updateSuccess.type));
  updateFail$ = this.actions$.pipe(ofType(TodoActions.updateFailure.type));
  removeSuccess$ = this.actions$.pipe(ofType(TodoActions.removeSuccess.type));
  removeFail$ = this.actions$.pipe(ofType(TodoActions.removeFailure.type));

  constructor(
    private store: Store<State>,
    private actions$: Actions<TodoActions.ActionUnion>
  ) {}

  /**
   * Load all
   * @param offset Offset
   * @param limit Limit
   */
  loadAll(offset?: number, limit?: number) {
    this.store.dispatch(TodoActions.loadAll({ offset, limit }));
  }

  /**
   * Load
   * @param id ID
   */
  load(id: string) {
    this.store.dispatch(TodoActions.load({ id }));
  }

  /**
   * Create
   * @param todo Todo
   */
  create(todo: Partial<Todo>) {
    this.store.dispatch(TodoActions.create({ todo }));
  }

  /**
   * Update
   * @param todo Todo
   */
  update(todo: Todo) {
    this.store.dispatch(TodoActions.update({ todo }));
  }

  /**
   * Remove
   * @param id ID
   */
  remove(id: string) {
    this.store.dispatch(TodoActions.remove({ id }));
  }
}

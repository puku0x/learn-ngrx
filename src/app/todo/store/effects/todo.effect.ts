import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, concatMap, switchMap, catchError } from 'rxjs/operators';

import { TodoService } from '../../services';
import * as TodoActions from '../actions';

/**
 * Todo effects
 */
@Injectable()
export class TodoEffects {
  constructor(
    private actions$: Actions<TodoActions.ActionUnion>,
    private todoService: TodoService
  ) {}

  @Effect()
  loadAll$ = this.actions$.pipe(
    ofType(TodoActions.loadAll.type),
    switchMap(action => {
      const { offset, limit } = action.payload;
      return this.todoService.loadAll(offset, limit).pipe(
        map(result => TodoActions.loadAllSuccess({ todos: result })),
        catchError(error => of(TodoActions.loadAllFailure({ error })))
      );
    })
  );

  @Effect()
  create$ = this.actions$.pipe(
    ofType(TodoActions.create.type),
    concatMap(action => {
      const { todo } = action.payload;
      return this.todoService.create(todo).pipe(
        map(result => TodoActions.createSuccess({ todo: result })),
        catchError(error => of(TodoActions.createFailure({ error })))
      );
    })
  );

  @Effect()
  update$ = this.actions$.pipe(
    ofType(TodoActions.update.type),
    concatMap(action => {
      const { todo } = action.payload;
      return this.todoService.update(todo).pipe(
        map(result => TodoActions.updateSuccess({ todo: result })),
        catchError(error => of(TodoActions.updateFailure({ error })))
      );
    })
  );

  @Effect()
  remove$ = this.actions$.pipe(
    ofType(TodoActions.remove.type),
    concatMap(action => {
      const { id } = action.payload;
      return this.todoService.remove(id).pipe(
        map(() => TodoActions.removeSuccess({ id })),
        catchError(error => of(TodoActions.removeFailure({ error })))
      );
    })
  );
}

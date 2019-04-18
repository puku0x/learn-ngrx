import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { MatDialog, MatDialogRef } from '@angular/material';
import { of } from 'rxjs';
import { map, tap, concatMap, switchMap, catchError } from 'rxjs/operators';

import { TodoService } from '../../services';
import {
  TodoCreateDialogComponent,
  TodoDeleteDialogComponent,
  TodoEditDialogComponent
} from '../../containers';
import * as TodoActions from '../actions';

/**
 * Todo effects
 */
@Injectable()
export class TodoEffects {
  private createDialogRef: MatDialogRef<TodoCreateDialogComponent>;
  private editDialogRef: MatDialogRef<TodoEditDialogComponent>;
  private removeDialogRef: MatDialogRef<TodoDeleteDialogComponent>;

  constructor(
    private actions$: Actions,
    private dialog: MatDialog,
    private todoService: TodoService
  ) {}

  loadAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.loadAll),
      switchMap(action => {
        const { offset, limit } = action.payload;
        return this.todoService.loadAll(offset, limit).pipe(
          map(result => TodoActions.loadAllSuccess({ todos: result })),
          catchError(error => of(TodoActions.loadAllFailure({ error })))
        );
      })
    )
  );

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.load),
      concatMap(action => {
        const { id } = action.payload;
        return this.todoService.load(id).pipe(
          map(result => TodoActions.loadSuccess({ todo: result })),
          catchError(error => of(TodoActions.loadFailure({ error })))
        );
      })
    )
  );

  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.create),
      concatMap(action => {
        const { todo } = action.payload;
        return this.todoService.create(todo).pipe(
          map(result => TodoActions.createSuccess({ todo: result })),
          catchError(error => of(TodoActions.createFailure({ error })))
        );
      })
    )
  );

  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.update),
      concatMap(action => {
        const { todo } = action.payload;
        return this.todoService.update(todo).pipe(
          map(result => TodoActions.updateSuccess({ todo: result })),
          catchError(error => of(TodoActions.updateFailure({ error })))
        );
      })
    )
  );

  remove$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.remove),
      concatMap(action => {
        const { id } = action.payload;
        return this.todoService.remove(id).pipe(
          map(() => TodoActions.removeSuccess({ id })),
          catchError(error => of(TodoActions.removeFailure({ error })))
        );
      })
    )
  );

  showCreateDialog$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TodoActions.showCreateDialog),
        tap(() => {
          this.createDialogRef = this.dialog.open(TodoCreateDialogComponent, {
            width: '400px'
          });
        })
      ),
    { dispatch: false }
  );

  hideCreateDialog$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TodoActions.createSuccess),
        tap(() => {
          if (this.createDialogRef) {
            this.createDialogRef.close();
          }
        })
      ),
    { dispatch: false }
  );

  showEditDialog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.showEditDialog),
      map(action => {
        const { todo } = action.payload;
        this.editDialogRef = this.dialog.open(TodoEditDialogComponent, {
          width: '400px'
        });
        return TodoActions.load({ id: todo.id });
      })
    )
  );

  hideEditDialog$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TodoActions.createSuccess, TodoActions.updateSuccess),
        tap(() => {
          if (this.editDialogRef) {
            this.editDialogRef.close();
          }
        })
      ),
    { dispatch: false }
  );

  showRemoveDialog$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TodoActions.showRemoveDialog),
        tap(action => {
          const { id } = action.payload;
          this.removeDialogRef = this.dialog.open(TodoDeleteDialogComponent, {
            data: {
              id
            }
          });
        })
      ),
    { dispatch: false }
  );

  hideRemoveDialog$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TodoActions.removeSuccess),
        tap(() => {
          if (this.removeDialogRef) {
            this.removeDialogRef.close();
          }
        })
      ),
    { dispatch: false }
  );
}

import { createReducer, on } from '@ngrx/store';

import { initialState, adapter } from '../state';
import * as TodoActions from '../actions';

/**
 * Reducer
 * @param state State
 * @param action Action
 */
export const reducer = createReducer(
  initialState,
  on(TodoActions.loadAll, (state, action) => {
    return { ...state, loading: true };
  }),
  on(TodoActions.loadAllSuccess, (state, action) => {
    const { todos } = action.payload;
    return adapter.addAll(todos, { ...state, loading: false });
  }),
  on(TodoActions.loadAllFailure, (state, action) => {
    const { error } = action.payload;
    return { ...state, loading: false, error };
  }),
  on(TodoActions.load, (state, action) => {
    const { id } = action.payload;
    return { ...state, loading: true, selectedId: id };
  }),
  on(TodoActions.loadSuccess, (state, action) => {
    const { todo } = action.payload;
    return adapter.upsertOne(todo, { ...state, loading: false });
  }),
  on(TodoActions.loadFailure, (state, action) => {
    const { error } = action.payload;
    return { ...state, loading: false, error };
  }),
  on(TodoActions.create, (state, action) => {
    return { ...state, loading: true };
  }),
  on(TodoActions.createSuccess, (state, action) => {
    const { todo } = action.payload;
    return adapter.addOne(todo, { ...state, loading: false });
  }),
  on(TodoActions.createFailure, (state, action) => {
    const { error } = action.payload;
    return { ...state, loading: false, error };
  }),
  on(TodoActions.update, (state, action) => {
    return { ...state, loading: true };
  }),
  on(TodoActions.updateSuccess, (state, action) => {
    const { todo } = action.payload;
    return adapter.updateOne(
      { id: todo.id, changes: todo },
      { ...state, loading: false }
    );
  }),
  on(TodoActions.updateFailure, (state, action) => {
    const { error } = action.payload;
    return { ...state, loading: false, error };
  }),
  on(TodoActions.remove, (state, action) => {
    return { ...state, loading: true };
  }),
  on(TodoActions.removeSuccess, (state, action) => {
    const { id } = action.payload;
    return adapter.removeOne(id, { ...state, loading: false });
  }),
  on(TodoActions.removeFailure, (state, action) => {
    const { error } = action.payload;
    return { ...state, loading: false, error };
  })
);

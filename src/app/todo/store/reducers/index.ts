import { Action } from '@ngrx/store';

import { State } from '../state';
import { reducer as todoReducer } from './todo.reducer';

// Workaround for AoT
export function reducer(state: State, action: Action) {
  return todoReducer(state, action);
}

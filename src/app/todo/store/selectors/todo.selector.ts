import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State, featureName, adapter } from '../state';

/**
 * Selectors
 */
const { selectAll } = adapter.getSelectors();
const getTodoState = createFeatureSelector<State>(featureName);

export const getLoading = createSelector(
  getTodoState,
  state => state.loading
);

export const getTodos = createSelector(
  getTodoState,
  selectAll
);

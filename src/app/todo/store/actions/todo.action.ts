import { createAction } from '@ngrx/store';

import { Todo } from '../../../models';

export const loadAll = createAction(
  '[Todo Page] Load All',
  (payload: { offset?: number; limit?: number } = {}) => ({ payload })
);

export const loadAllSuccess = createAction(
  '[Todo API] Load All Success',
  (payload: { todos: Todo[] }) => ({ payload })
);

export const loadAllFailure = createAction(
  '[Todo API] Load All Failure',
  (payload: { error: any }) => ({ payload })
);

export const load = createAction(
  '[Todo Page] Load',
  (payload: { id: string }) => ({ payload })
);

export const loadSuccess = createAction(
  '[Todo API] Load Success',
  (payload: { todo: Todo }) => ({ payload })
);

export const loadFailure = createAction(
  '[Todo API] Load Failure',
  (payload: { error: any }) => ({ payload })
);

export const create = createAction(
  '[Todo Page] Create',
  (payload: { todo: Partial<Todo> }) => ({ payload })
);

export const createSuccess = createAction(
  '[Todo API] Create Success',
  (payload: { todo: Todo }) => ({ payload })
);

export const createFailure = createAction(
  '[Todo API] Create Failure',
  (payload: { error: any }) => ({ payload })
);

export const update = createAction(
  '[Todo Edit Dialog] Update',
  (payload: { todo: Partial<Todo> }) => ({ payload })
);

export const updateSuccess = createAction(
  '[Todo API] Update Success',
  (payload: { todo: Todo }) => ({ payload })
);

export const updateFailure = createAction(
  '[Todo API] Update Failure',
  (payload: { error: any }) => ({ payload })
);

export const remove = createAction(
  '[Todo Page] Remove',
  (payload: { id: string }) => ({ payload })
);

export const removeSuccess = createAction(
  '[Todo API] Remove Success',
  (payload: { id: string }) => ({ payload })
);

export const removeFailure = createAction(
  '[Todo API] Remove Failure',
  (payload: { error: any }) => ({ payload })
);

export const showCreateDialog = createAction(
  '[Todo Page] Show Create Dialog',
  (payload: {} = {}) => ({ payload })
);

export const showEditDialog = createAction(
  '[Todo Page] Show Edit Dialog',
  (payload: { todo: Todo }) => ({ payload })
);

export const showRemoveDialog = createAction(
  '[Todo Page] Show Remove Dialog',
  (payload: { id: string }) => ({ payload })
);

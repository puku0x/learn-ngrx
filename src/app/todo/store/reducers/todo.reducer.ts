import { State, initialState, adapter } from '../state';
import * as TodoActions from '../actions';

/**
 * Reducer
 * @param state State
 * @param action Action
 */
export function reducer(
  state = initialState,
  action: TodoActions.ActionUnion
): State {
  switch (action.type) {
    case TodoActions.loadAll.type: {
      return { ...state, loading: true };
    }
    case TodoActions.loadAllSuccess.type: {
      const { todos } = action.payload;
      return adapter.addAll(todos, { ...state, loading: false });
    }
    case TodoActions.loadAllFailure.type: {
      return { ...state, loading: false };
    }
    case TodoActions.create.type: {
      return { ...state, loading: true };
    }
    case TodoActions.createSuccess.type: {
      const { todo } = action.payload;
      return adapter.addOne(todo, { ...state, loading: false });
    }
    case TodoActions.createFailure.type: {
      return { ...state, loading: false };
    }
    case TodoActions.update.type: {
      return { ...state, loading: true };
    }
    case TodoActions.updateSuccess.type: {
      const { todo } = action.payload;
      return adapter.updateOne(
        {
          id: todo.id,
          changes: todo
        },
        { ...state, loading: false }
      );
    }
    case TodoActions.updateFailure.type: {
      return { ...state, loading: false };
    }
    case TodoActions.remove.type: {
      return { ...state, loading: true };
    }
    case TodoActions.removeSuccess.type: {
      const { id } = action.payload;
      return adapter.removeOne(id, { ...state, loading: false });
    }
    case TodoActions.removeFailure.type: {
      return { ...state, loading: false };
    }
    default: {
      return state;
    }
  }
}

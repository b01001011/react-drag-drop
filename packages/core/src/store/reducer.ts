import { Action, Actions } from './actions';
import type { State } from './types';

export function getInitialState(): State {
  return {
    draggable: {
      id: null,
      coordinates: {x: 0, y: 0},
      translate: {x: 0, y: 0}
    },
    droppable: {

    }
  };
}

export function reducer(state: State, action: Actions): State {
  switch(action.type) {
    case Action.Drag:
      return {
        ...state
      };
    case Action.DragCancel:
      return {
        ...state
      };
    case Action.DragEnd:
      return {
        ...state
      };
    case Action.DragOver:
      return {
        ...state
      };
    case Action.DragStart:
      return {
        ...state
      };
    default:
      return state;
  }
}
import { __assign } from "tslib";
import { Action } from './actions';
export function getInitialState() {
    return {
        draggable: {},
        droppable: {}
    };
}
export function reducer(state, action) {
    switch (action.type) {
        case Action.Drag:
            return __assign({}, state);
        case Action.DragCancel:
            return __assign({}, state);
        case Action.DragEnd:
            return __assign({}, state);
        case Action.DragOver:
            return __assign({}, state);
        case Action.DragStart:
            return __assign({}, state);
        default:
            return state;
    }
}
//# sourceMappingURL=reducer.js.map
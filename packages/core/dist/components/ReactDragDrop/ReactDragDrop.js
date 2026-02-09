import { jsx as _jsx } from "react/jsx-runtime";
import { RDDDragEventsContext } from '../../contexts';
import { memo, useReducer } from 'react';
import { reducer, getInitialState } from '../../store';
import { useRDDDragEvents } from '../../rdd-drag-events';
;
export var ReactDragDrop = memo(function (_a) {
    var id = _a.id;
    var _b = useReducer(reducer, undefined, getInitialState), state = _b[0], dispatch = _b[1];
    var _c = useRDDDragEvents(), dispatchRDDDragEvent = _c[0], registerRDDDragEventsListener = _c[1];
    console.log(id, state, dispatch, dispatchRDDDragEvent);
    return _jsx(RDDDragEventsContext.Provider, { value: registerRDDDragEventsListener });
});
//# sourceMappingURL=ReactDragDrop.js.map
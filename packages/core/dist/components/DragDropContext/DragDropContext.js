import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { memo, useReducer } from 'react';
import { reducer, getInitialState } from '../../store';
;
export var DragDropContext = memo(function (_a) {
    var id = _a.id;
    var store = useReducer(reducer, undefined, getInitialState);
    console.log(id, store);
    return _jsx(_Fragment, {});
});
//# sourceMappingURL=DragDropContext.js.map
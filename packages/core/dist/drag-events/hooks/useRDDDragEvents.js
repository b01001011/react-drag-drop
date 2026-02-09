import { useCallback, useState } from 'react';
export var useDragEvents = function () {
    var listeners = useState(function () {
        return new Set();
    })[0];
    var dispatch = useCallback(function (_a) {
        var type = _a.type, event = _a.event;
        listeners.forEach(function (listener) {
            var _a;
            return (_a = listener[type]) === null || _a === void 0 ? void 0 : _a.call(listener, event);
        });
    }, [listeners]);
    var registerListener = useCallback(function (listener) {
        listeners.add(listener);
    }, [listeners]);
    return [dispatch, registerListener];
};
//# sourceMappingURL=useRDDDragEvents.js.map
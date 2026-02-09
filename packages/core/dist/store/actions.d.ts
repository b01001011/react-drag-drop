export declare enum Action {
    Drag = "drag",
    DragCancel = "dragCancel",
    DragEnd = "dragEnd",
    DragOver = "dragOver",
    DragStart = "dragStart"
}
export type Actions = {
    type: Action.Drag;
} | {
    type: Action.DragCancel;
} | {
    type: Action.DragEnd;
} | {
    type: Action.DragOver;
} | {
    type: Action.DragStart;
};

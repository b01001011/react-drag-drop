import {
  RddId
} from './common'

import {
  RddCoordinates
} from './coordinates'

interface RddDragEvent {
}

interface RddDragAbortEvent {
  id: RddId;
}

interface RddDragCancelEvent extends DragEvent {}
interface RddDragEndEvent extends RddDragEvent {}
interface RddDragMoveEvent extends DragEvent {}
interface RddDragOverEvent extends DragEvent {}
interface RddDragPendingEvent {
  id: RddId;
  coordinates: RddCoordinates, 
  offset?: RddCoordinates | undefined
}
interface RddDragStartEvent extends RddDragEvent {}

interface RddNativeEvent extends Event {
  isConsumed: boolean;
}

type RddSyntheticEventName = keyof Pick<
  React.DOMAttributes<any>, 
  Exclude<keyof React.DOMAttributes<any>, 'children' | 'dangerouslySetInnerHTML'>
>;

type RddSyntheticEventHandler = (event: React.SyntheticEvent, id: RddId) => void;

type RddSyntheticEventListener = {
  name: RddSyntheticEventName;
  handler: RddSyntheticEventHandler;
};

type RddSyntheticEventListenerProps = Record<string, (event: React.SyntheticEvent) => void>;

export {
  type RddDragAbortEvent,
  type RddDragCancelEvent,
  type RddDragEndEvent,
  type RddDragMoveEvent,
  type RddDragOverEvent,
  type RddDragPendingEvent,
  type RddDragStartEvent,
  type RddNativeEvent,
  type RddSyntheticEventHandler,
  type RddSyntheticEventListener,
  type RddSyntheticEventListenerProps,
  type RddSyntheticEventName
}

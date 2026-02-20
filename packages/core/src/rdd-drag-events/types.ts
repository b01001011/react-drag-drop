import {
  RddDragEndEvent,
  RddDragStartEvent
} from '../types';

interface RddDragEventsHandler {
  onDragEnd?(event: RddDragEndEvent): void;
  onDragStart?(event: RddDragStartEvent): void;
}

interface RddDragEvent {
  type: keyof RddDragEventsHandler;
  event: 
    | RddDragEndEvent
    | RddDragStartEvent;
}

type RddUnregisterListener = () => void;

type RddRegisterListener = (
  handler: RddDragEventsHandler
) => RddUnregisterListener;

export {
  type RddDragEventsHandler,
  type RddDragEvent,
  type RddRegisterListener,
  type RddUnregisterListener
}

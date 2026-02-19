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

type RddUnregisterHandler = () => void;

type RddRegisterHandler = (
  handler: RddDragEventsHandler
) => RddUnregisterHandler;

export {
  type RddDragEventsHandler,
  type RddDragEvent,
  type RddUnregisterHandler,
  type RddRegisterHandler
}
import {
  RDDDragEndEvent,
  RDDDragStartEvent
} from '../types';

interface RDDDragEventsListener {
  onDragEnd?(event: RDDDragEndEvent): void;
  onDragStart?(event: RDDDragStartEvent): void;
}

interface RDDDragEvent {
  type: keyof RDDDragEventsListener;
  event: 
    | RDDDragEndEvent
    | RDDDragStartEvent;
}

type RDDUnregisterListener = () => void;

type RDDRegisterListener = (
  listener: RDDDragEventsListener
) => RDDUnregisterListener;

export {
  type RDDDragEventsListener,
  type RDDDragEvent,
  type RDDUnregisterListener,
  type RDDRegisterListener
}
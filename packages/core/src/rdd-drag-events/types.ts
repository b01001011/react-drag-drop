import {
  RDDDragEndEvent,
  RDDDragStartEvent
} from '../types';

export interface RDDDragEventsListener {
  onDragEnd?(event: RDDDragEndEvent): void;
  onDragStart?(event: RDDDragStartEvent): void;
}

export interface RDDDragEvent {
  type: keyof RDDDragEventsListener;
  event: 
    | RDDDragEndEvent
    | RDDDragStartEvent;
}

export type RDDUnregisterListener = () => void;

export type RDDRegisterListener = (
  listener: RDDDragEventsListener
) => RDDUnregisterListener;

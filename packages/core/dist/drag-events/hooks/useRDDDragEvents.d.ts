import { RDDDragEvent, RDDDragEventsListener } from '../types';
export declare const useDragEvents: () => readonly [({ type, event }: RDDDragEvent) => void, (listener: RDDDragEventsListener) => void];

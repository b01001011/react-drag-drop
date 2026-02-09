import { RDDDragEvent, RDDRegisterListener } from '../types';
export declare const useRDDDragEvents: () => readonly [({ type, event }: RDDDragEvent) => void, RDDRegisterListener];

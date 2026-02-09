import { createContext } from 'react';
import type { RDDRegisterListener } from '../rdd-drag-events/types';

export const RDDDragEventsContext = createContext<RDDRegisterListener | null>(null);

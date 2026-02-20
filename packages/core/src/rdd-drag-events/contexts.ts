import { createContext } from 'react';
import type { RddRegisterListener } from './types';

export const RddDragEventsContext = createContext<RddRegisterListener | null>(null);

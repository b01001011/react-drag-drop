import { createContext } from 'react';
import type { RddRegisterHandler } from './types';

export const RddDragEventsContext = createContext<RddRegisterHandler | null>(null);

import { 
  RddCoordinates,
  RddId
} from '../types';

export type Draggable = {
  id: RddId;
  key: RddId;
  elementRef: React.RefObject<HTMLElement | null>;
};

export interface State {
  draggable: {
    id: RddId | null;
    coordinates: RddCoordinates;
    translate: RddCoordinates;
  };
  droppable: {

  };
  draggables: Map<RddId, Draggable | undefined>;
}


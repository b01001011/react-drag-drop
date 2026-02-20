import { 
  RddCoordinates,
  RddId
} from '../types';

type RddDraggable = {
  id: RddId;
  key: RddId;
  elementRef: React.RefObject<HTMLElement | null>;
};

interface State {
  draggable: {
    id: RddId | null;
    coordinates: RddCoordinates;
    translate: RddCoordinates;
  };
  droppable: {

  };
  draggables: Map<RddId, RddDraggable | undefined>;
}

export {
  type RddDraggable,
  type State
}
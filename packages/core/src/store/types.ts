import { 
  RDDCoordinates,
  RDDID
} from '../types';

export interface State {
  draggable: {
    id: RDDID | null;
    coordinates: RDDCoordinates;
    translate: RDDCoordinates;
  };
  droppable: {

  };
}

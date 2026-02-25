import {
  type RddId,
  type RddCoordinates,
  type RddSyntheticEventName
} from '../types';

import {
  type RddDraggable
} from '../store';

interface RddSensorProps {
  activeDraggableId: RddId;
  activeDraggable: RddDraggable;
  // context: MutableRefObject<SensorContext>;
  event: Event;

  onDragAbort(id: RddId): void;
  onDragCancel(): void;
  onDragEnd(): void;
  onDragMove(coordinates: RddCoordinates): void;
  onDragPending(
    id: RddId,
    // constraint: PointerActivationConstraint,
    coordinates: RddCoordinates,
    offset?: RddCoordinates | undefined
  ): void;
  onDragStart(coordinates: RddCoordinates): void;
}

abstract class RddSensor {
  static activationEventNames: RddSyntheticEventName[];
}

interface RddSensorConstructor {
  new (props: RddSensorProps): RddSensor;
  activationEventNames: RddSyntheticEventName[];
}

export {
  type RddSensorConstructor,
  RddSensor,
  RddSensorProps,
};

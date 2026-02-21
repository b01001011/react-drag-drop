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

  onAbort(id: RddId): void;
  onCancel(): void;
  onEnd(): void;
  onMove(coordinates: RddCoordinates): void;
  onPending(
    id: RddId,
    // constraint: PointerActivationConstraint,
    coordinates: RddCoordinates,
    offset?: RddCoordinates | undefined
  ): void;
  onStart(coordinates: RddCoordinates): void;
}

abstract class RddSensor {
  static activationEventNames: RddSyntheticEventName[];
}

interface RddSensorConstructor {
  new (props: RddSensorProps): RddSensor;
  activationEventNames: RddSyntheticEventName[];
}

export {
  RddSensor,
  RddSensorConstructor,
  RddSensorProps,
};

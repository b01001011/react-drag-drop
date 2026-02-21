import {
  RddSensor,
  RddSensorProps
} from '../types';

import {
  type RddSyntheticEventName
} from '../../types';

class RddPointerSensor extends RddSensor {
  static activationEventNames = [ 'onPointerDown' ] as RddSyntheticEventName[];
  
  constructor(props: RddSensorProps) {
    super();
    
    const { event } = props;
    void event;
  }
}

export {
  RddPointerSensor
};

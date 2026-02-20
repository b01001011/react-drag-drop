import {
  type RddSensor
} from '../types'

import {
  type RddSyntheticEventName
} from '../../types'

class RddPointerSensor implements RddSensor {
  activationEventNames = [ 'onPointerDown' ] as RddSyntheticEventName[];
}

export {
  RddPointerSensor
};

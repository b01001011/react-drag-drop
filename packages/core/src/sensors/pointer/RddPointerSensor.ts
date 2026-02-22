import {
  getOwnerDocument
} from '@react-drag-drop/utils';

import {
  RddSensor,
  RddSensorProps
} from '../types';

import {
  type RddSyntheticEventName
} from '../../types';

class RddPointerSensor extends RddSensor {
  static activationEventNames = [ 'onPointerDown' ] as RddSyntheticEventName[];
  
  private document: Document;
  
  constructor(props: RddSensorProps) {
    super();
    
    const { event } = props;
    this.document = getOwnerDocument(event.target);
    void this.document;
  }
}

export {
  RddPointerSensor
};

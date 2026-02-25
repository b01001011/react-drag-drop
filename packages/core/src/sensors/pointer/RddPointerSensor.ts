import {
  getOwnerDocument,
  getWindow,
} from '@react-drag-drop/utils';

import {
  RddEventListenerManager
} from '../common';

import {
  RddSensor,
  RddSensorProps
} from '../types';

import {
  type RddSyntheticEventName
} from '../../types';

class RddPointerSensor extends RddSensor {
  static activationEventNames = [ 'onPointerDown' ] as RddSyntheticEventName[];
  
  private props: RddSensorProps;
  private document: Document;

  private listenerManager: RddEventListenerManager;
  private documentListenerManager: RddEventListenerManager;
  private windowListenerManager: RddEventListenerManager;
  
  constructor(props: RddSensorProps) {
    super();
    
    this.props = props;
    this.document = getOwnerDocument(props.event.target);

    this.listenerManager = new RddEventListenerManager(this.document);
    this.documentListenerManager = new RddEventListenerManager(this.document);
    this.windowListenerManager = new RddEventListenerManager(getWindow(props.event.target));

    this.onCancel = this.onCancel.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.onKeydown = this.onKeydown.bind(this);
    this.onMove = this.onMove.bind(this);

    this.activate()
  }

  private activate() {
    this.listenerManager.add('pointermove', this.onMove, { passive: false });
    this.listenerManager.add('pointerup', this.onEnd);
    this.listenerManager.add('pointercancel', this.onCancel);

    this.documentListenerManager.add('keydown', (event) => this.onKeydown(event as KeyboardEvent));

    this.windowListenerManager.add('resize', this.onCancel);
    this.windowListenerManager.add('dragstart', this.preventDefault);
    this.windowListenerManager.add('visibilitychange', this.onCancel);
    this.windowListenerManager.add('contextmenu', this.preventDefault);
  }

  private deactivate() {

  }

  private onCancel() {
    const { onDragCancel } = this.props;
    onDragCancel();
  }

  private onEnd() {
    this.deactivate();
  }

  private onKeydown(event: KeyboardEvent) {
    if (event.code === 'Escape') {
      this.onCancel();
    }
  }

  private onMove(event: Event) {
    void event;
  }

  private preventDefault(event: Event) {
    event.preventDefault();
  }
}

export {
  RddPointerSensor
};

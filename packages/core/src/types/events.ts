import {
  RddId
} from './common'

interface RddDragEvent {

}

interface RddDragEndEvent extends RddDragEvent {}
interface RddDragStartEvent extends RddDragEvent {}

interface RddEvent extends Event {
  isConsumed: boolean;
}

type RddSyntheticEventName = keyof Pick<
  React.DOMAttributes<any>, 
  Exclude<keyof React.DOMAttributes<any>, 'children' | 'dangerouslySetInnerHTML'>
>;

type RddSyntheticEventHandler = (event: React.SyntheticEvent, id: RddId) => void;

type RddSyntheticEventListener = {
  name: RddSyntheticEventName;
  handler: RddSyntheticEventHandler;
};

type RddSyntheticEventListenerProps = Record<string, (event: React.SyntheticEvent) => void>;

export {
  type RddDragEndEvent,
  type RddDragStartEvent,
  type RddEvent,
  type RddSyntheticEventHandler,
  type RddSyntheticEventListener,
  type RddSyntheticEventListenerProps,
  type RddSyntheticEventName
}

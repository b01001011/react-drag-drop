interface RddDragEvent {

}

interface RddDragEndEvent extends RddDragEvent {}
interface RddDragStartEvent extends RddDragEvent {}

type RddSyntheticHandlerProps = Record<string, (event: React.SyntheticEvent) => void>;

export {
  type RddDragEndEvent,
  type RddDragStartEvent,
  type RddSyntheticHandlerProps
}

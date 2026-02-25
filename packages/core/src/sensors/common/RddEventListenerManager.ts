export class RddEventListenerManager {
  private target: EventTarget | null;
  private cleanups: (() => void)[] = [];

  constructor(target: EventTarget | null) {
    this.target = target;
  }

  public add(
    eventName: string,
    handler: EventListener,
    options?: AddEventListenerOptions | boolean
  ) {
    if (this.target == null) {
      return;
    }

    this.target.addEventListener(eventName, handler, options);

    this.cleanups.push(() =>
      this.target?.removeEventListener(eventName, handler, options)
    );
  }

  public dispose() {
    this.cleanups.forEach((cleanup) => cleanup());
    this.cleanups = [];
  }
}

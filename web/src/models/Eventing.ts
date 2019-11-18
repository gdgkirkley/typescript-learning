// Alias
type Callback = () => void;

export class Eventing {
  // We don't know what the events are going to be, so keep it generic
  events: { [key: string]: Callback[] } = {};
  /**
   * Registers an event handler with this object, so other parts of the app know when something changes
   * @param eventName The event being triggered
   * @param callback The function to invoke
   */
  on = (eventName: string, callback: Callback): void => {
    // handling the case where events isn't initialized
    const handlers = this.events[eventName] || [];

    handlers.push(callback);

    this.events[eventName] = handlers;
  };

  /**
   * Triggers an event to tell other parts of the app that something has changed
   * @param eventName The event to trigger
   */
  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];

    if (!handlers || !handlers.length) return;

    handlers.forEach(callback => {
      callback();
    });
  };
}

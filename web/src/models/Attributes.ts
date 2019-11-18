export class Attributes<T> {
  constructor(private data: T) {}

  /**
   * Get data
   * <K extends keyof T> - constraint meaning that type K can only be one of the keys of T
   * T[K] - return a normal object lookup
   * @param propName the data to return
   */
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  getAll(): T {
    return this.data;
  }

  /**
   * Update data
   * @param update the data to update
   */
  set(update: T): void {
    Object.assign(this.data, update);
  }
}

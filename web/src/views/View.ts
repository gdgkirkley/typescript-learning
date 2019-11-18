import { Model } from "../models/Model";

/**
 * The view class that provides methods for displaying a View
 */
export abstract class View<
  ModelType extends Model<ModelInterface>,
  ModelInterface
> {
  regions: { [key: string]: Element } = {};

  /**
   * Construct the View
   * @param parent The parent element for the page
   * @param model The model type for the View
   */
  constructor(public parent: Element, public model: ModelType) {
    this.bindModel();
  }

  abstract template(): string;

  // Default implementation that can be overridden
  // but provided so you don't always have to build one.
  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  /**
   * Find elements that match and render the elements
   */
  regionsMap(): { [key: string]: string } {
    return {};
  }

  // Re-render when something changes
  bindModel(): void {
    this.model.on("change", () => {
      this.render();
    });
  }

  /**
   * Split the events map and bind events to correct fragments
   * @param fragment the fragment to bind events to
   */
  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":");

      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  /**
   * Map the fragment Views to the correct regions
   * @param fragment The html fragment to map regions to
   */
  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();

    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector);
      if (element) {
        this.regions[key] = element;
      }
    }
  }

  /**
   * Default implementation to make the method available elsewhere
   */
  onRender(): void {}

  /**
   * Render the content to the page by binding events, mapping regions, and then
   * appending it to the parent element
   */
  render(): void {
    this.parent.innerHTML = "";

    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);

    this.onRender();

    this.parent.append(templateElement.content);
  }
}

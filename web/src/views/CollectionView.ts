import { Collection } from "../models/Collection";

/**
 * The abstract View for a Collection
 */
export abstract class CollectionView<ModelType, ModelInterface> {
  constructor(
    public parent: Element,
    public collection: Collection<ModelType, ModelInterface>
  ) {}

  /**
   * The abstract implementation to say that this will be present in the inherited class
   * @param model The model for this collection
   * @param itemParent The parent element to add items to
   */
  abstract renderItem(model: ModelType, itemParent: Element): void;

  /**
   * Render the collection view, loop through the items in the collection model
   * and bind to the parent element.
   */
  render(): void {
    this.parent.innerHTML = "";

    const templateElement = document.createElement("template");

    for (let model of this.collection.models) {
      const itemParent = document.createElement("div");

      this.renderItem(model, itemParent);

      templateElement.content.append(itemParent);
    }

    this.parent.append(templateElement.content);
  }
}

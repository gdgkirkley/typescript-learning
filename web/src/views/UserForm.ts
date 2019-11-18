import { User, UserProps } from "../models/User";
import { View } from "./View";

/**
 * Render the form to create and update a new user
 */
export class UserForm extends View<User, UserProps> {
  /**
   * Create the events to bind to the elements in this View
   */
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.onSetAgeClick,
      "click:.set-name": this.onSetNameClick,
      "click:.save-model": this.onSaveClick
    };
  }

  /**
   * Set a random age for this User
   */
  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  /**
   * Set the name entered into the input
   * Input may return null, hence the type check
   */
  onSetNameClick = (): void => {
    const input = this.parent.querySelector("input");

    if (input) {
      const name = input.value;

      this.model.set({ name });
    }
  };

  /**
   * Save the data entered to the User
   */
  onSaveClick = (): void => {
    this.model.save();
  };

  /**
   * Template for this View
   */
  template(): string {
    return `
        <div>
            <input placeholder=${this.model.get("name")} />
            <button class="set-name">Change Name</button>
            <button class="set-age">Set Random Age</button>
            <button class="save-model">Save User</button>
        </div>
        `;
  }
}

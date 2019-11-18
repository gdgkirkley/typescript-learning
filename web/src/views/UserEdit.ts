import { View } from "./View";
import { User, UserProps } from "../models/User";
import { UserForm } from "./UserForm";
import { UserShow } from "./UserShow";

/**
 * The container for the UserShow and UserForm
 */
export class UserEdit extends View<User, UserProps> {
  /**
   * Which elements to bind the Views to.
   */
  regionsMap(): { [key: string]: string } {
    return {
      userShow: ".user-show",
      userForm: ".user-form"
    };
  }

  /**
   * Render the elements to the correct location.
   */
  onRender(): void {
    new UserShow(this.regions.userShow, this.model).render();
    new UserForm(this.regions.userForm, this.model).render();
  }

  /**
   * The template for this fragment, including the places to bind the elements to
   */
  template(): string {
    return `
            <div>
                <div class="user-show"></div>
                <div class="user-form"></div>
            </div>
        `;
  }
}

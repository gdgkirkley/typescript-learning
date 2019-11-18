// A web framework
import { UserForm } from "./views/UserForm";
import { User } from "./models/User";

const user = User.create({ name: "Test", age: 20 });

const root = document.querySelector("#root");

if (root) {
  const userForm = new UserForm(root, user);

  userForm.render();
} else {
  throw new Error("No root found");
}

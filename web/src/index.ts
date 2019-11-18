// A web framework
import { UserEdit } from "./views/UserEdit";
import { UserList } from "./views/UserList";
import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";

const user = User.create({ name: "Test", age: 20 });

const users = new Collection(
  "http://localhost:3000/users",
  (json: UserProps) => {
    return User.create(json);
  }
);

users.on("change", () => {
  const root = document.querySelector("#root");
  const usersDiv = document.querySelector("#users");

  if (root && usersDiv) {
    new UserEdit(root, user).render();
    new UserList(usersDiv, users).render();
  }
});

users.fetch();

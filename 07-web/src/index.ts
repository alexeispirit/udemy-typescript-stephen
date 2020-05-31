import { User } from "./models/User";

const user = new User({ id: 1, name: "173 name", age: 173 });

user.on("save", () => {
  console.log(user);
});

user.save();

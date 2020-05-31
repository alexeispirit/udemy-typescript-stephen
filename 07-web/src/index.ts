import { User } from "./models/User";

const user = new User({ name: "alex", age: 30 });

console.log(user.get("name"));

user.on("change", () => {
  console.log("change");
});

user.set({ name: "new name" });

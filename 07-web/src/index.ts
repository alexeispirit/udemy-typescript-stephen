import { User } from "./models/User";

const user = new User({ name: "alex", age: 30 });

user.on("change", () => {
  console.log("change1");
});
user.on("change", () => {
  console.log("change3");
});
user.on("save", () => {
  console.log("save");
});

user.trigger("savess");

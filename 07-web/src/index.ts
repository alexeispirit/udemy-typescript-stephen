import { User } from "./models/User";

const user = new User({ name: "alex", age: 30 });

user.events.on("change", () => {
  console.log("change");
});

user.events.trigger("change");

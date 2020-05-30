import { User } from "./models/User";

const user = new User({ name: "alex", age: 30 });

user.on("change", () => {});

console.log(user);

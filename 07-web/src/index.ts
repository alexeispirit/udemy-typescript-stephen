import { User } from "./models/User";

const user = new User({ name: "alex", age: 30 });

user.set({ name: "newname" });

console.log(user.get("name"));
console.log(user.get("age"));

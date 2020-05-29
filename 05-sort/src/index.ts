import { Sorter } from "./Sorter";
// import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

// const numbers = new NumbersCollection([10, 3, 50, -5, 0]);
// const sorter = new Sorter(numbers);
// sorter.sort();
// console.log(numbers.data);

const charCollection = new CharactersCollection("xgope");
const sorter = new Sorter(charCollection);
sorter.sort();
console.log(charCollection.data);

import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbers = new NumbersCollection([10, 3, 50, -5, 0]);
numbers.sort();
console.log(numbers.data);

const charCollection = new CharactersCollection("xgope");
charCollection.sort();
console.log(charCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.add(12);

linkedList.sort();
linkedList.print();

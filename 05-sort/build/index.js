"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
// import { NumbersCollection } from "./NumbersCollection";
var CharactersCollection_1 = require("./CharactersCollection");
// const numbers = new NumbersCollection([10, 3, 50, -5, 0]);
// const sorter = new Sorter(numbers);
// sorter.sort();
// console.log(numbers.data);
var charCollection = new CharactersCollection_1.CharactersCollection("xgope");
var sorter = new Sorter_1.Sorter(charCollection);
sorter.sort();
console.log(charCollection.data);

"use strict";
/**
 * Use a bubble sort algorithm to sort an array of numbers, a character string, or a Linked List.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
console.log("--- Numbers");
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 5, -3, 0, 500]);
numbersCollection.sort();
console.log(numbersCollection.data);
console.log("--- Characters");
var charactersCollection = new CharactersCollection_1.CharactersCollection("XaaeTNryb");
charactersCollection.sort();
console.log(charactersCollection.data);
console.log("--- Linked List");
var linkedCollection = new LinkedList_1.LinkedList();
linkedCollection.add(500);
linkedCollection.add(-10);
linkedCollection.add(-3);
linkedCollection.add(4);
linkedCollection.sort();
linkedCollection.print();

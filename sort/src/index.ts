/**
 * Use a bubble sort algorithm to sort an array of numbers, a character string, or a Linked List.
 */

import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

console.log("--- Numbers");
const numbersCollection = new NumbersCollection([10, 5, -3, 0, 500]);
numbersCollection.sort();
console.log(numbersCollection.data);

console.log("--- Characters");
const charactersCollection = new CharactersCollection("XaaeTNryb");
charactersCollection.sort();
console.log(charactersCollection.data);

console.log("--- Linked List");
const linkedCollection = new LinkedList();
linkedCollection.add(500);
linkedCollection.add(-10);
linkedCollection.add(-3);
linkedCollection.add(4);

linkedCollection.sort();
linkedCollection.print();

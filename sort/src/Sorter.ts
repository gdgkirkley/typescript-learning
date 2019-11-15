// Note: interface doesn't guarantee that the methods are doing the correct thing.
/*
interface Sortable {
  length: number;
  swap(leftIndex: number, rightIndex: number): void;
  compare(leftIndex: number, rightIndex: number): boolean;
}

Because below we are implementing an abstract class, we no longer need this interface.

Interfaces:
1) Set up a contract between different classes
2) Use when we have different objects that we want to work together
3) Promotes loose coupling

Abstract classes:
1) Set up a contract between different classes
2) Use when we are trying to build up a definition of an object
3) Strongly couples classes together

*/

/**
 * We want this to be as generic as possible, hence the interface above.
 * This is a bubble sort algorithm.
 */
export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}

/*
for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j];
            
            this.collection[j] = this.collection[j + 1];
            
            this.collection[j + 1] = leftHand;
        }
    }
}

This sorting algorith is the initial implementation that works for numbers, etc.
But with strings, it doesn't work. This is because strings are immutable, meaning that
we can't reassign at a given position, ie., this line: this.collection[j] = this.collection[j + 1];

We also can't compare characters like with numbers. When Javascript compares "X" > "a" for example,
it's really doing this:

"X".charCodeAt(0); = 88
"a".charCodeAt(0); = 97
88 > 97; false

*/

/*
    For above:
    
    i = 0; length = 5; j = 0; for2 = 0 < 4; if(10 > 5 :: true) collection[0] = 5; collection[1] = 10; [5, 10, -3, 0, 9]
    i = 0; length = 5; j = 1; for2 = 1 < 4; if(10 > -3 :: true) collection[1] = -3; collection[2] = 10; [5, -3, 10, 0, 9]
    i = 0; length = 5; j = 2; for2 = 2 < 4; if(10 > 0 :: true) collection[2] = 0; collection[3] = 10; [5, -3, 0, 10, 9]
    i = 0; length = 5; j = 3; for2 = 3 < 4; if(10 > 9 :: true) collection[3] = 9; collection[4] = 10; [5, -3, 0, 9, 10]
    i = 1; length = 5; j = 0; for2 = 0 < 3; if(5 > -3 :: true) collection[0] = -3; collection[1] = 5; [-3, 5, 0, 9, 10]
    i = 1; length = 5; j = 1; for2 = 1 < 3; if(5 > 0 :: true) collection[1] = 0; collection[2] = 5; [-3, 0, 5, 9, 10]
    i = 1; length = 5; j = 2; for2 = 2 < 3; if(5 > 9 :: false) [-3, 0, 5, 9, 10]
    i = 1; length = 5; j = 3; for2 = 3 < 3; [-3, 0, 5, 9, 10]
    i = 2; length = 5; j = 0; for2 = 0 < 2; if(-3 > 0 :: false) [-3, 0, 5, 9, 10]
    i = 2; length = 5; j = 1; for2 = 1 < 2; if(0 > 5 :: false) [-3, 0, 5, 9, 10]
    i = 2; length = 5; j = 2; for2 = 2 < 2; [-3, 0, 5, 9, 10]
    etc..
*/

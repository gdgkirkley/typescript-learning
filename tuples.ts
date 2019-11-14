const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40
};

// Alias for a tuple
type Drink = [string, boolean, number];

// Tuple
const pepsi: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["brown", false, 0];

/* 
When to use?

1) When using a CSV, a tuple is great for each row.
*/

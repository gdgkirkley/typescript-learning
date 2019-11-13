const carMakers: string[] = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

// Array of arrays
const carsByMakes: string[][] = [["f150"], ["corolla"], ["camaro"]];

// Help with inference when extracting values -- both are type string
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with map
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (string | Date)[] = [new Date(), "2030-10-10"];
importantDates.push(new Date());

// Any time we need to represent a collection of records with some arbitrary order. VS TUPLES

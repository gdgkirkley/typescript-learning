// Reusable interface
interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  yearBuilt: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);

// Create functions that accept arguments that are typed with interfaces

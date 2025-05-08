function formatString(input: string, toUpper?: boolean): string {
  return toUpper === true || toUpper === undefined
    ? input.toUpperCase()
    : input.toLowerCase();
}

const res1 = formatString("soumy");
const res2 = formatString("mayesha", true);
const res3 = formatString("Mayesha", false);

console.log(res1, res2, res3);

type Item = {
  title: string;
  rating: number;
};

function filterByRating(items: Item[]): Item[] {
  return items.filter((item) => item.rating >= 4);
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
  { title: "Book D", rating: 4.0 },
];

console.log(filterByRating(books));

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((newAarr, currentArr) => newAarr.concat(currentArr), []);
}
console.log(concatenateArrays(["a", "b"], ["c"], ["g", "nn"]));

class Vehicle {
  private make: string;
  year: number;
  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
  getInfo(): void {
    console.log(`Make: ${this.make}, year: ${this.year}`);
  }
}
class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }
  getModel(): void {
    console.log(`Model: ${this.model}`);
  }
}
const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();
myCar.getModel();

function processValue(value: string | number): number {
  return typeof value === "string" ? value.length : value * 2;
}
console.log(processValue("mayesha"));
console.log(processValue(6));

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  return products.length > 0
    ? products.reduce((product, currentPro) => {
        return currentPro.price > product.price ? currentPro : product;
      })
    : null;
}

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];

console.log(getMostExpensiveProduct(products));

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  return day === Day.Sunday ? "Weekend" : "Weekday";
}
console.log(getDayType(Day.Monday));
console.log(getDayType(Day.Sunday));

function delay(time: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, time));
}
async function squareAsync(n: number): Promise<number> {
  await delay(1000);
  if (n >= 0) {
    return n * n;
  } else {
    throw new Error("Error: Negative number not allowed");
  }
}

squareAsync(4).then(console.log);
squareAsync(-3).catch(console.error);

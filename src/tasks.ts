function formatString(input: string, toUpper?: boolean): string {
  return toUpper === true || toUpper === undefined
    ? input.toUpperCase()
    : input.toLowerCase();
}

type Item = {
  title: string;
  rating: number;
};
function filterByRating(items: Item[]): Item[] {
  return items.filter((item) => item.rating >= 4);
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((newAarr, currentArr) => newAarr.concat(currentArr), []);
}

class Vehicle {
  private make: string;
  private year: number;
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

function processValue(value: string | number): number {
  return typeof value === "string" ? value.length : value * 2;
}

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

function delay(time: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, time));
}
async function squareAsync(n: number): Promise<number> {
  if (n > 0) {
    await delay(1000);
    return n * n;
  } else if (n === 0) {
    return n;
  } else {
    throw new Error("Error: Negative number not allowed");
  }
}

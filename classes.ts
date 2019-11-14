class Vehicle {
  constructor(public color: string) {}

  drive(): void {
    console.log("chugga chugga");
  }
  protected honk(): void {
    console.log("Honk");
  }
}

const vehicle = new Vehicle("orange");
vehicle.drive();

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color); // reference to calling the constructor in parent
  }

  private drive() {
    console.log("vroom vroom");
  }

  public startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, "blue");
car.startDrivingProcess();

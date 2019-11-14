import faker from "faker";
import { Mappable } from "./Map";

// Implements will help us make sure that it has all the properties of the interface
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName() + " " + faker.name.lastName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  getMarkerContent(): string {
    return `<p>The user ${this.name} is here!</p>`;
  }
}

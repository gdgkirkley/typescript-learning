const profile = {
  name: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

// We have to specify the properties that are coming out of the object.
const { age }: { age: number } = profile;

const {
  coords: { lat, lng }
}: { coords: { lat: number; lng: number } } = profile;

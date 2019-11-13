const add = (a: number, b: number): number => {
  return a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

// Very rare case. Only when we really never expect the function to return anything
const throwError = (message: string): never => {
  throw new Error(message);
};

const todaysForecast = {
  date: new Date(),
  weather: "sunny"
};

//Destructuring -- ({destructure} : { set types }): return type =>
const logWeather = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

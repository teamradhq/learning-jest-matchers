export function toBeDivisibleBy(actual: number, divisor: number) {
  const pass = actual % divisor === 0;
  if (pass) {
    return {
      message: () => (`expected ${actual} not to be divisible by ${divisor}`),
      pass: true,
    };
  } else {
    return {
      message: () => (`expected ${actual} to be divisible by ${divisor}`),
      pass: false,
    };
  }
}

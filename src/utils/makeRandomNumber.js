export const makeRandomNumber = (min, max) => {
  console.log(min + Math.floor(Math.random() * max) );
  return min + Math.floor(Math.random() * max);
};

export const makeRandomNumber = (min:number, max:number):number => {
  return min + Math.floor(Math.random() * max);
};

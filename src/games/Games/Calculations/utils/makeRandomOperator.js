import { makeRandomNumber } from "../../../../utils/makeRandomNumber";

export const makeRandomOperator = () => {
  const num = makeRandomNumber(1, 3);

  switch (num) {
    case 1:
      return "+";
    case 2:
      return "-";
    case 3:
      return "*";
    default:
      return null;
  }
};

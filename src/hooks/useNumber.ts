import { useState } from "react";

export type numberAction = {
  increase: (inc?: number) => void;
  decrease: (dec?: number) => void;
};

export const useNumber = (initialValue: number = 0) => {
  const [value, setValue] = useState(initialValue);

  const increase = (inc = 1) => setValue((prev) => prev + inc);
  const decrease = (dec = 1) => setValue((prev) => prev - dec);

  return [
    value,
    {
      increase,
      decrease,
    },
  ] as [number, numberAction];
};

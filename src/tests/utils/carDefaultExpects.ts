import { TCar, TCreateCarData } from "../../interfaces/car.interfaces";

export const carDefaultExpects = (data: TCar, expectData: TCreateCarData) => {
  expect(data.name).toBe(expectData.name);
  expect(data.description).toBe(expectData.description);
  expect(data.brand).toBe(expectData.brand);
  expect(data.year).toBe(expectData.year);
  expect(data.km).toBe(expectData.km);
};

import { prisma } from "../../database/prisma";
import { CarServices } from "../../services/car.services";
import { createCarListMock } from "../mocks/car.mocks";
import { carDefaultExpects } from "../utils/carDefaultExpects";

describe("Unit test: get many cars", () => {
  beforeEach(async () => {
    await prisma.car.deleteMany();
  });

  test("Should be able to get many cars correctly", async () => {
    await prisma.car.createMany({ data: createCarListMock });

    const carServices = new CarServices();

    const cars = await carServices.findMany();

    expect(cars).toHaveLength(createCarListMock.length);
    expect(cars[0]).toBeDefined();
    carDefaultExpects(cars[0], createCarListMock[0]);
    expect(cars[1]).toBeDefined();
    carDefaultExpects(cars[1], createCarListMock[1]);
  });
});

import { prisma } from "../../database/prisma";
import { CarServices } from "../../services/car.services";
import { createCarBodyMock } from "../mocks/car.mocks";
import { carDefaultExpects } from "../utils/carDefaultExpects";

describe("Unit test: create car", () => {
  beforeEach(async () => {
    await prisma.car.deleteMany();
  });

  test("Should be able to create a car correctly", async () => {
    const carServices = new CarServices();

    const car = await carServices.create(createCarBodyMock);

    expect(car.id).toBeDefined();
    carDefaultExpects(car, createCarBodyMock);
  });
});

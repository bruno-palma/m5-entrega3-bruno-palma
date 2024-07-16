import { prisma } from "../../database/prisma";
import { CarServices } from "../../services/car.services";
import { createCarBodyMock, updateCarBodyMock } from "../mocks/car.mocks";

describe("Unit test: update car", () => {
  beforeEach(async () => {
    await prisma.car.deleteMany();
  });

  test("Should be able to update a car correctly", async () => {
    const newCar = await prisma.car.create({ data: createCarBodyMock });

    const carServices = new CarServices();

    const car = await carServices.update(newCar.id, updateCarBodyMock);

    const newCarExpect = { ...newCar, ...updateCarBodyMock };

    expect(car).toStrictEqual(newCarExpect);
  });
});

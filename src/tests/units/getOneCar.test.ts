import { prisma } from "../../database/prisma";
import { CarServices } from "../../services/car.services";
import { createCarBodyMock } from "../mocks/car.mocks";

describe("Unit test: get one car", () => {
  beforeEach(async () => {
    await prisma.car.deleteMany();
  });

  test("Should be able to get one car correctly", async () => {
    const newCar = await prisma.car.create({ data: createCarBodyMock });

    const carServices = new CarServices();

    const car = await carServices.findOne(newCar.id);

    expect(car).toStrictEqual(newCar);
  });
});

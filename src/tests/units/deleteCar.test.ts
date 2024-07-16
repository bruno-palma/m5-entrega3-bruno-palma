import { prisma } from "../../database/prisma";
import { CarServices } from "../../services/car.services";
import { createCarBodyMock } from "../mocks/car.mocks";

describe("Unit test: delete car", () => {
  beforeEach(async () => {
    await prisma.car.deleteMany();
  });

  test("Should be able to delete a car correctly", async () => {
    const newCar = await prisma.car.create({ data: createCarBodyMock });

    const carServices = new CarServices();

    await carServices.delete(newCar.id);
  });
});

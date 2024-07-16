import { prisma } from "../../database/prisma";
import { createCarBodyMock } from "../mocks/car.mocks";
import { request } from "../utils/request";

describe("Integration test: delete car", () => {
  beforeEach(async () => {
    await prisma.car.deleteMany();
  });

  test("Should be able to delete a car correctly", async () => {
    const newCar = await prisma.car.create({ data: createCarBodyMock });

    await request.delete(`/cars/${newCar.id}`).expect(204);
  });

  test("Should throw error when car id is invalid", async () => {
    const data = await request
      .delete("/cars/2aa4f43c-4371-40a1-b9c9-4ec3562a314f")
      .expect(404)
      .then((response) => response.body);

    expect(data.message).toBe("Car not found.");
  });
});

import { prisma } from "../../database/prisma";
import { createCarBodyMock } from "../mocks/car.mocks";
import { request } from "../utils/request";

describe("Integration test: get one car", () => {
  beforeEach(async () => {
    await prisma.car.deleteMany();
  });

  test("Should be able to get one car correctly", async () => {
    const newCar = await prisma.car.create({ data: createCarBodyMock });

    const car = await request
      .get(`/cars/${newCar.id}`)
      .expect(200)
      .then((response) => response.body);

    expect(car).toStrictEqual(newCar);
  });

  test("Should throw error when car id is invalid", async () => {
    const data = await request
      .get("/cars/2aa4f43c-4371-40a1-b9c9-4ec3562a314f")
      .expect(404)
      .then((response) => response.body);

    expect(data.message).toBe("Car not found.");
  });
});

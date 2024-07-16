import { prisma } from "../../database/prisma";
import {
  createCarBodyMock,
  createCarWrongMock,
  updateCarBodyMock,
} from "../mocks/car.mocks";
import { request } from "../utils/request";

describe("Integration test: update car", () => {
  beforeEach(async () => {
    await prisma.car.deleteMany();
  });

  test("Should be able to update a car correctly", async () => {
    const newCar = await prisma.car.create({ data: createCarBodyMock });

    const car = await request
      .patch(`/cars/${newCar.id}`)
      .send(updateCarBodyMock)
      .expect(200)
      .then((response) => response.body);

    const newCarExpect = { ...newCar, ...updateCarBodyMock };

    expect(car).toStrictEqual(newCarExpect);
  });

  test("Should throw error when update body is wrong", async () => {
    const newCar = await prisma.car.create({ data: createCarBodyMock });

    const data = await request
      .patch(`/cars/${newCar.id}`)
      .send(createCarWrongMock)
      .expect(400)
      .then((response) => response.body);

    expect(data).toStrictEqual({
      errors: [
        {
          code: "invalid_type",
          expected: "number",
          received: "string",
          path: ["year"],
          message: "Expected number, received string",
        },
      ],
    });
  });

  test("Should throw error when car id is invalid", async () => {
    const data = await request
      .patch("/cars/2aa4f43c-4371-40a1-b9c9-4ec3562a314f")
      .send(updateCarBodyMock)
      .expect(404)
      .then((response) => response.body);

    expect(data.message).toBe("Car not found.");
  });
});

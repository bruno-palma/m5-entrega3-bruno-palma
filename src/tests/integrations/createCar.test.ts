import { prisma } from "../../database/prisma";
import {
  createCarBodyMock,
  createCarInvalidMock,
  createCarWrongMock,
} from "../mocks/car.mocks";
import { carDefaultExpects } from "../utils/carDefaultExpects";
import { request } from "../utils/request";

describe("Integration test: create car", () => {
  beforeEach(async () => {
    await prisma.car.deleteMany();
  });

  test("Should be able to create a car correctly", async () => {
    const car = await request
      .post("/cars")
      .send(createCarBodyMock)
      .expect(201)
      .then((response) => response.body);

    expect(car.id).toBeDefined();
    carDefaultExpects(car, createCarBodyMock);
  });

  test("Should throw error when creation body is incomplete", async () => {
    const data = await request
      .post("/cars")
      .send(createCarInvalidMock)
      .expect(400)
      .then((response) => response.body);

    expect(data).toStrictEqual({
      errors: [
        {
          code: "invalid_type",
          expected: "string",
          received: "undefined",
          path: ["name"],
          message: "Required",
        },
      ],
    });
  });

  test("Should throw error when creation body is wrong", async () => {
    const data = await request
      .post("/cars")
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
});

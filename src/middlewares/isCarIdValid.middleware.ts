import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import { prisma } from "../database/prisma";

export class IsCarIdValid {
  static async execute(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const id = request.params.id;

    const car = await prisma.car.findFirst({ where: { id } });

    if (!car) {
      throw new AppError(404, "Car not found.");
    }

    next();
  }
}

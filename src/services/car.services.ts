import { prisma } from "../database/prisma";
import {
  TCar,
  TCreateCarData,
  TUpdateCarData,
} from "../interfaces/car.interfaces";

export class CarServices {
  async create(data: TCreateCarData): Promise<TCar> {
    const newCar = await prisma.car.create({ data });

    return newCar;
  }

  async findMany(search?: string): Promise<TCar[]> {
    const cars = await prisma.car.findMany({ where: { name: search } });

    return cars;
  }

  async findOne(id: string): Promise<TCar> {
    const car = (await prisma.car.findFirst({ where: { id } })) as TCar;

    return car;
  }

  async update(id: string, data: TUpdateCarData): Promise<TCar> {
    const updatedCar = await prisma.car.update({ where: { id }, data });

    return updatedCar;
  }

  async delete(id: string) {
    return await prisma.car.delete({ where: { id } });
  }
}

import { Request, Response } from "express";
import { CarServices } from "../services/car.services";

export class CarControllers {
  async create(request: Request, response: Response) {
    const carServices = new CarServices();

    const car = await carServices.create(request.body);

    return response.status(201).json(car);
  }

  async findMany(request: Request, response: Response) {
    const carServices = new CarServices();

    const cars = await carServices.findMany(request.query.name as string);

    return response.status(200).json(cars);
  }

  async findOne(request: Request, response: Response) {
    const carServices = new CarServices();

    const car = await carServices.findOne(request.params.id);

    return response.status(200).json(car);
  }

  async update(request: Request, response: Response) {
    const carServices = new CarServices();

    const car = await carServices.update(request.params.id, request.body);

    return response.status(200).json(car);
  }

  async delete(request: Request, response: Response) {
    const carServices = new CarServices();

    await carServices.delete(request.params.id);

    return response.status(204).json();
  }
}

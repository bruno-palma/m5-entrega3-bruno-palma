import { Router } from "express";
import { CarControllers } from "../controllers/car.controllers";
import { IsCarIdValid } from "../middlewares/isCarIdValid.middleware";
import { ValidateRequest } from "../middlewares/validateRequest.middleware";
import { createCarSchema, updateCarSchema } from "../schemas/car.schema";

export const carRouter = Router();

const carControllers = new CarControllers();

carRouter.post(
  "/",
  ValidateRequest.execute({ body: createCarSchema }),
  carControllers.create
);
carRouter.get("/", carControllers.findMany);
carRouter.get("/:id", IsCarIdValid.execute, carControllers.findOne);
carRouter.patch(
  "/:id",
  ValidateRequest.execute({ body: updateCarSchema }),
  IsCarIdValid.execute,
  carControllers.update
);
carRouter.delete("/:id", IsCarIdValid.execute, carControllers.delete);

import { z } from "zod";
import {
  carSchema,
  createCarSchema,
  updateCarSchema,
} from "../schemas/car.schema";

export type TCar = z.infer<typeof carSchema>;
export type TCreateCarData = z.infer<typeof createCarSchema>;
export type TUpdateCarData = z.infer<typeof updateCarSchema>;

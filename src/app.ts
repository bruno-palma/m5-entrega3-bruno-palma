import express, { json } from "express";
import "express-async-errors";
import helmet from "helmet";
import cors from "cors";
import "dotenv/config";
import { carRouter } from "./routes/car.routes";
import { HandleErrors } from "./middlewares/handleErrors.middleware";

export const app = express();

app.use(cors());

app.use(helmet());

app.use(json());

app.use("/cars", carRouter);

app.use(HandleErrors.execute);

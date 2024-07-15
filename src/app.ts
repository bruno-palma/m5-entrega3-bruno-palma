import express, { json } from "express";
import "express-async-errors";
import helmet from "helmet";
import cors from "cors";
import "dotenv/config";

export const app = express();

app.use(cors());

app.use(helmet());

app.use(json());

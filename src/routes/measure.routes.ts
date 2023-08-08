import express from "express";
import { measureService } from "../domain/services/measure.service";

export const measureRouter = express.Router();

measureRouter.get("/", measureService.getMeasures);
measureRouter.post("/", measureService.createMeasure);
measureRouter.delete("/:id", measureService.deleteMeasure);

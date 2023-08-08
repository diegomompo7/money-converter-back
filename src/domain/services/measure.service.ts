import { Request, Response, NextFunction } from "express";
import { measureOdm } from "../odm/measure.odm";

export const getMeasures = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const page = req.query.page ? parseInt(req.query.page as string) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;

    const measures = await measureOdm.getAllMeasures(page, limit);

    const totalElements = await measureOdm.getMeasureCount();

    const response = {
      totalItems: totalElements,
      totalPages: Math.ceil(totalElements / limit),
      currentPage: page,
      data: measures,
    };

    res.json(response);
  } catch (error) {
    next(error);
  }
};

export const createMeasure = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const createdMeasure = await measureOdm.createMeasure(req.body);
    res.status(201).json(createdMeasure);
  } catch (error) {
    next(error);
  }
};

export const deleteMeasure = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const id = req.params.id;
    const measureDeleted = await measureOdm.deleteMeasure(id);
    if (measureDeleted) {
      res.json(measureDeleted);
    } else {
      res.status(404).json({});
    }
  } catch (error) {
    next(error);
  }
};

export const measureService = {
  getMeasures,
  createMeasure,
  deleteMeasure,
};

import { Measure, IMeasure, IMeasureCreate } from "../entities/measure.entity"
import { Document } from "mongoose";

const getAllMeasures = async (page: number, limit: number): Promise<IMeasure[]> => {
  return await Measure.find()
    .limit(limit)
    .skip((page - 1) * limit);
};

const getMeasureCount = async (): Promise<number> => {
  return await Measure.countDocuments();
};

const createMeasure = async (measureData: IMeasureCreate): Promise<Document<IMeasure>> => {
  const measure = new Measure(measureData);
  const document: Document<IMeasure> = (await measure.save()) as any;
  return document;
};

const deleteMeasure = async (id: string): Promise<Document<IMeasure> | null> => {
  return await Measure.findByIdAndDelete(id);
};

export const measureOdm = {
  getAllMeasures,
  getMeasureCount,
  createMeasure,
  deleteMeasure,
};

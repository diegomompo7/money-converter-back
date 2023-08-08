import { Document, Schema, model } from "mongoose"

export interface IMeasureCreate {
  numConverter: number;
  fromConverter: string;
  resultConverter: number;
  toConverter: string;
}

export type IMeasure = IMeasureCreate & Document

const measureSchema = new Schema<IMeasureCreate>({
  numConverter: {
    type: Number,
    trim: true,
    required: true,
  },
  fromConverter: {
    type: String,
    trim: true,
    required: true,
  },
  resultConverter: {
    type: Number,
    trim: true,
    required: true,
  },
  toConverter: {
    type: String,
    trim: true,
    required: true,
  }
})

export const Measure = model<IMeasureCreate>("Measure", measureSchema, "measures")

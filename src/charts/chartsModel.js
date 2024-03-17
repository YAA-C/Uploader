import mongoose from "mongoose";

const commonSchema = new mongoose.Schema(
  {
    labels: {
      type: [String],
      required: true,
    },
    data: {
      type: [Number],
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const r9Schema = new mongoose.Schema(
  {
    weapon_ar: {
      type: mongoose.Schema.Types.ObjectId,
        ref: "piecharts",
        required: true,
    },
    weapon_sniper: {
      type: mongoose.Schema.Types.ObjectId,
        ref: "piecharts",
        required: true,
    },
  },  
  {
    versionKey: false,
    timestamps: true,
  }
);

export const barModel = mongoose.model("barcharts", commonSchema);
export const pieModel = mongoose.model("piecharts", commonSchema);
export const histModel = mongoose.model("histograms", commonSchema);
export const R9Model = mongoose.model("nines", r9Schema);

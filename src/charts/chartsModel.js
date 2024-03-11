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

const histSchema = new mongoose.Schema(
  {
    histData: {
      type: [String],
      required: true,
    },
    edges: {
      type: [Number],
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const histforNo7Schema = new mongoose.Schema(
  {
    histData: {
      type: [Number],
      required: true,
    },
    edges: {
      type: [Number],
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const q9Schema = new mongoose.Schema(
  {
    sniper: {
      labels: {
        type: [String],
        required: true,
      },
      data: {
        type: [Number],
        required: true,
      },
    },
    scopingAR: {
      labels: {
        type: [String],
        required: true,
      },
      data: {
        type: [Number],
        required: true,
      },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const barModel = mongoose.model("bars", commonSchema);
export const pieModel = mongoose.model("pies", commonSchema);
export const histModel = mongoose.model("hists", histSchema);
export const histforNo7Model = mongoose.model("sevens", histforNo7Schema);
export const q9Model = mongoose.model("nines", q9Schema);

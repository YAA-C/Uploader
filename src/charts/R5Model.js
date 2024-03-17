import mongoose from "mongoose";

const R5schema = new mongoose.Schema(
  {
    weapon_category_ar: {
      weapon_ak47: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "piecharts",
        required: true,
      },
      weapon_famas: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "piecharts",
        required: true,
      },
      weapon_galilar: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "piecharts",
        required: true,
      },
      weapon_m4a1: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "piecharts",
        required: true,
      },
      weapon_m4a1_silencer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "piecharts",
        required: true,
      },
    },
    weapon_category_pistol: {
      weapon_deagle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "piecharts",
        required: true,
      },
      weapon_elite: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "piecharts",
        required: true,
      },
      weapon_fiveseven: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "piecharts",
        required: true,
      },
      weapon_glock: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "piecharts",
        required: true,
      },
      weapon_p250: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "piecharts",
        required: true,
      },
      weapon_tec9: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "piecharts",
        required: true,
      },
      weapon_usp_silencer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "piecharts",
        required: true,
      },
    },
    weapon_category_smg: {
      weapon_mac10: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "piecharts",
        required: true,
      },
      weapon_mp9: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "piecharts",
        required: true,
      },
    },
    weapon_category_sniper: {
      weapon_awp: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "piecharts",
        required: true,
      },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const R5model = mongoose.model("compositepiecharts", R5schema);

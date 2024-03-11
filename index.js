import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

const mongoDB_LINK = process.env.mongoDB_LINK;

import {
  createPie,
  createHist,
  createHistForNo7,
  createPieFor9
} from "./src/charts/charts.js";

mongoose
  .connect(mongoDB_LINK)
  .then(() => {
    console.log("DB connected 🌟");

    // ************************************ //
    // QNo1 [ PIE ]
    const QNo_1_data = {
      labels: Q1Labels,
      data: Q1Data,
    };
    // createPie(QNo_1_data);     // Call this method
    // QNo1 [ PIE ]
    // ************************************ //

    // ************************************ //
    // QNo2 [ HIST ]
    const QNo_2_data = {
      histData: Q2Labels,
      edges: Q2Data,
    };
    // createHist(QNo_2_data);     // call this method
    // QNo2 [ HIST ]
    // ************************************ //

    // ************************************ //
    // QNo3 [ PIE ]
    const QNo_3_data = {
      labels: Q3Labels,
      data: Q3Data,
    };
    // createPie(QNo_3_data);     // Call this method
    // QNo3 [ PIE ]
    // ************************************ //

    // ************************************ //
    // QNo4 [ PIE ]
    const QNo_4_data = {
      labels: Q4Labels,
      data: Q4Data,
    };
    // createPie(QNo_4_data);     // Call this method
    // QNo4 [ PIE ]
    // ************************************ //

    // ************************************ //
    // QNo6 [ PIE ]
    const QNo_6_data = {
      labels: Q6Labels,
      data: Q6Data,
    };
    // createPie(QNo_6_data);     // Call this method
    // QNo6 [ PIE ]
    // ************************************ //

    // ************************************ //
    // QNo7 [ HIST ]
    const QNo_7_data = {
      histData: Q7HistData,
      edges: Q7HistEdges,
    };
    // createHistForNo7(QNo_7_data); // call this method
    // QNo7 [ HIST ]
    // ************************************ //

    // ************************************ //
    // QNo8 [ PIE ]
    const QNo_8_data = {
      labels: Q8Labels,
      data: Q8Data,
    };
    // createPie(QNo_8_data);     // Call this method
    // QNo8 [ PIE ]
    // ************************************ //

    // ************************************ //
    // QNo9 [ 2-PIE ]
    createPieFor9(Q9values);     // Call this method
    // QNo9 [ 2-PIE ]
    // ************************************ //
    

    // ************************************ //
    // QNo10 [ PIE ]
    const QNo_10_data = {
      labels: Q10Labels,
      data: Q10Data,
    };
    // createPie(QNo_10_data); // Call this method
    // QNo10 [ PIE ]
    // ************************************ //
  })
  .catch((error) => {
    console.log("DB Connection Failed !!");
    console.log(error);
  });

const Q1Labels = [
  "weapon_ak47",
  "weapon_m4a1_silencer",
  "weapon_awp",
  "weapon_usp_silencer",
  "weapon_mp9",
  "weapon_deagle",
  "weapon_mac10",
  "weapon_galilar",
  "weapon_m4a1",
  "weapon_glock",
  "weapon_p250",
  "weapon_famas",
  "weapon_elite",
  "weapon_tec9",
  "weapon_fiveseven",
];
const Q1Data = [
  6170, 5536, 3089, 1922, 1898, 1143, 1066, 904, 881, 845, 671, 401, 331, 255,
  58,
];

const Q2Labels = [
  "CHEST",
  "HEAD",
  "STOMACH",
  "RIGHTARM",
  "RIGHTLEG",
  "LEFTARM",
  "LEFTLEG",
  "GEAR",
];
const Q2Data = [251, 91, 81, 40, 16, 13, 8, 2];

const Q3Labels = ["ar", "pistol", "sniper", "smg"];
const Q3Data = [13892.0, 5225.0, 3089.0, 2964.0];

const Q4Labels = ["No Movement", "Crouching"];
const Q4Data = [26349.0, 11632.0];

const Q6Labels = ["Obstructed Shots", "Non-Obstructed Shots"];
const Q6Data = [2957, 35024];

const Q7HistData = [
  54, 5, 48, 20, 17, 6, 7, 3, 4, 3, 3, 80, 140, 247, 128, 364, 520, 787, 1248,
  1397, 2741, 3569, 4514, 3982, 4268, 2649, 2474, 1847, 1608, 1266, 1131, 713,
  595, 324, 253, 159, 72, 48, 66, 59, 66, 50, 1, 34, 9, 5, 5, 12, 33, 20, 13,
  10, 20, 11, 3, 8, 1, 5, 4, 3,
];
const Q7HistEdges = [
  -22.4395751953125, -21.4395751953125, -20.4395751953125, -19.4395751953125,
  -18.4395751953125, -17.4395751953125, -16.4395751953125, -15.4395751953125,
  -14.4395751953125, -13.4395751953125, -12.4395751953125, -11.4395751953125,
  -10.4395751953125, -9.4395751953125, -8.4395751953125, -7.4395751953125,
  -6.4395751953125, -5.4395751953125, -4.4395751953125, -3.4395751953125,
  -2.4395751953125, -1.4395751953125, -0.4395751953125, 0.5604248046875,
  1.5604248046875, 2.5604248046875, 3.5604248046875, 4.5604248046875,
  5.5604248046875, 6.5604248046875, 7.5604248046875, 8.5604248046875,
  9.5604248046875, 10.5604248046875, 11.5604248046875, 12.5604248046875,
  13.5604248046875, 14.5604248046875, 15.5604248046875, 16.5604248046875,
  17.5604248046875, 18.5604248046875, 19.5604248046875, 20.5604248046875,
  21.5604248046875, 22.5604248046875, 23.5604248046875, 24.5604248046875,
  25.5604248046875, 26.5604248046875, 27.5604248046875, 28.5604248046875,
  29.5604248046875, 30.5604248046875, 31.5604248046875, 32.5604248046875,
  33.5604248046875, 34.5604248046875, 35.5604248046875, 36.5604248046875,
];

const Q8Labels = [
  "Average Utility Damage Done",
  "Average Support Utility Used",
];
const Q8Data = [4.058597476942648, 0.6611099332131878];

const Q9values = {
  sniper: {
    labels: ['Scoping', 'Not Scoping'],
    data: [0, 22]
  },
  scopingAR: {
    labels: ['Scoping', 'Not Scoping'],
    data: [0, 0],
  },
};

const Q10Labels =['Blind Shots', 'Not Blind Shots'];
const Q10Data =[61, 37540];





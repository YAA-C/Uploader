import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

const mongoDB_LINK = process.env.mongoDB_LINK;

import {
  createPie,
  createHist,
  createPieFor5,
  createHistForNo7,
  createPieFor9,
} from "./src/charts/charts.js";

import {Q1Labels,
  Q1Data,
  Q2Labels,
  Q2Data,
  Q3Labels,
  Q3Data,
  Q4Labels,
  Q4Data,
  Q6Labels,
  Q6Data,
  Q7HistData,
  Q7HistEdges,
  Q8Labels,
  Q8Data,
  Q9values,
  Q10Labels,
  Q10Data} from "./src/data/sampleDataTesting.js";

import { createFight } from "./src/fights/fights.js";
import { Q5values } from "./src/data/sampleDataTesting.js";

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
    // QNo5 [ PIEs ]
    // createPieFor5(Q5values);     // Call this method
    // QNo5 [ PIEs ]
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
    // createPieFor9(Q9values);     // Call this method
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
import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

const mongoDB_LINK = process.env.mongoDB_LINK;

import {
  createPie,
  createBar,
  createHist,
  createPieFor5,
  createPieFor9,
} from "../src/charts/charts.js";

import {
  Q1Labels,
  Q1Data,
  Q2Labels,
  Q2Data,
  Q3Labels,
  Q3Data,
  Q4Labels,
  Q4Data,
  Q6Labels,
  Q6Data,
  Q7Labels,
  Q7Data,
  Q8Labels,
  Q8Data,
  Q9values,
  Q10Labels,
  Q10Data,
  fightsData,
  matchesData,
  chartsData,
  newPlayersData,
  newMatchesDataTesting
} from "../src/data/sampleDataTesting.js";

import { createFight } from "../src/fights/fights.js";
import { Q5values } from "../src/data/sampleDataTesting.js";
import { createMatch } from "../src/matches/matches.js";
import { updateIsAnalyzed, updateCharts , updatePlayers} from "../src/matches/matches.js";

mongoose
  .connect(mongoDB_LINK)
  .then(() => {
    console.log("DB connected 🌟");

    // ************************************ //
    // QNo1 [ BAR ]
    const QNo_1_data = {
      labels: Q1Labels,
      data: Q1Data,
    };
    // createBar(QNo_1_data);     // Call this method
    // QNo1 [ BAR ]
    // ************************************ //

    // ************************************ //
    // QNo2 [ BAR ]
    const QNo_2_data = {
      labels: Q2Labels,
      data: Q2Data,
    };
    // createBar(QNo_2_data);     // call this method
    // QNo2 [ BAR ]
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
      labels: Q7Labels,
      data: Q7Data,
    };
    // createHist(QNo_7_data); // call this method
    // QNo7 [ HIST ]
    // ************************************ //

    // ************************************ //
    // QNo8 [ BAR ]
    const QNo_8_data = {
      labels: Q8Labels,
      data: Q8Data,
    };
    // createBar(QNo_8_data);     // Call this method
    // QNo8 [ BAR ]
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

    // ************************************ //
    // createFight(fightsData);
    // ************************************ //

    // ************************************ //
    // creating a sample match mongoDB matches document
    // createMatch(matchesData);  // Earlier
       createMatch(newMatchesDataTesting);
    // ************************************ //

    // ************************************ //
    // Matches Update [ isAnalyzed ] [ WORKS ]
    // updateIsAnalyzed("65f81fb277243c78efe5ba7d", true);
    // ************************************ //

    // ************************************ //
    // Matches Update [ charts ] [ WORKS ]
    // updateCharts("65f81fb277243c78efe5ba7d", chartsData);
    // ************************************ //

    // ************************************ //
    // Matches Update [ players ] [ WORKS ]
    // updatePlayers("65f81fb277243c78efe5ba7d", newPlayersData);
    // ************************************ //
  })
  .catch((error) => {
    console.log("DB Connection Failed !!");
    console.log(error);
  });

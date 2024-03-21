import mongoose from "mongoose";
import RabbitMQConnector from "./src/connector.js";

import { createPie, createBar, createHist } from "./src/charts/charts.js";
import { createFight } from "./src/fights/fights.js";
import { updateIsAnalyzed, updateCharts , updatePlayers} from "./src/matches/matches.js";

import dotenv from "dotenv";
dotenv.config();

const mongoDB_LINK = process.env.mongoDB_LINK;

// connect to mongoDB
mongoose.connect(mongoDB_LINK).then(() => {
    console.log("DB connected 🌟");

    // connect to RabbitMQ
    const connector = new RabbitMQConnector();
    connector.connectRabbit().then(() => {
        console.log("Connected to RabbitMQ 🔥");
        connector.receiveData();
    }).catch((error) => {
        console.log("RabbitMQ Connection Failed !!");
        console.log(error);
    })
}).catch((error) => {
    console.log("DB Connection Failed !!");
    console.log(error);
});
import {
  pieModel,
  histModel,
  histforNo7Model,
  q9Model,
} from "./chartsModel.js";

export const createPie = async (data) => {
  try {
    pieModel
      .create(data)
      .then((savedDocument) => {
        return console.log("Document saved successfully:", savedDocument);
      })
      .catch((error) => {
        return console.error("Error saving document:", error);
      });
  } catch (e) {
    console.error(e);
  }
};

export const createHist = async (data) => {
  try {
    histModel
      .create(data)
      .then((savedDocument) => {
        return console.log("Document saved successfully:", savedDocument);
      })
      .catch((error) => {
        return console.error("Error saving document:", error);
      });
  } catch (e) {
    console.error(e);
  }
};

export const createHistForNo7 = async (data) => {
  try {
    histforNo7Model
      .create(data)
      .then((savedDocument) => {
        return console.log("Document saved successfully:", savedDocument);
      })
      .catch((error) => {
        return console.error("Error saving document:", error);
      });
  } catch (e) {
    console.error(e);
  }
};

export const createPieFor9 = async (data) => {
  try {
    q9Model
      .create(data)
      .then((savedDocument) => {
        return console.log("Document saved successfully:", savedDocument);
      })
      .catch((error) => {
        return console.error("Error saving document:", error);
      });
  } catch (e) {
    console.error(e);
  }
};

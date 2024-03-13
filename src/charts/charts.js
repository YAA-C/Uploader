import {
  pieModel,
  histModel,
  histforNo7Model,
  q9Model,
} from "./chartsModel.js";

import { Q5model } from "./Q5Model.js";

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

export const createPieFor5 = async (data) => {
  try {
    const Q5dataToInsert = {};
    for (const categoryData of data) {
      const categoryObject = {};

      for (const weaponName in categoryData.weapons) {
        if (Object.hasOwnProperty.call(categoryData.weapons, weaponName)) {
          const weaponData = categoryData.weapons[weaponName];
          const savedDocument = await pieModel.create(weaponData);

          categoryObject[weaponName] = savedDocument._id;
        }
      }

      Q5dataToInsert[categoryData.weapon_category] = categoryObject;
    }
    // console.log(Q5dataToInsert);

    const categoryDocument = await Q5model.create(Q5dataToInsert)
      .then((savedDocument) => {
        return console.log("Document saved successfully:", savedDocument._id);
      })
      .catch((error) => {
        return console.error("Error saving document:", error);
      });
  } catch (err) {
    console.log(err);
  }
};

import {
  pieModel,
  histModel,
  barModel,
} from "./chartsModel.js";

import { R5model } from "./R5Model.js";

export const createPie = async (data) => {
  try {
    const savedDocument = await pieModel.create(data);
    return savedDocument;
  } catch (error) {
    console.error("Error saving document:", error);
    throw error;
  }
};

export const createBar = async (data) => {
  try {
    const savedDocument = await barModel.create(data);
    return savedDocument;
  } catch (error) {
    console.error("Error saving document:", error);
    throw error;
  }
};

export const createHist = async (data) => {
  try {
    const savedDocument = await histModel.create(data);
    return savedDocument;
  } catch (error) {
    console.error("Error saving document:", error);
    throw error;
  }
};

export const createPieFor9 = async (data) => {
  try {
    var sniper_id,ar_id; 

    await pieModel.create(data?.weapon_sniper).then((res)=>{
      sniper_id = res._id;
    })

    await pieModel.create(data?.weapon_ar).then((res)=>{
      ar_id = res._id;
    })

    const dataToSave = {
      weapon_sniper: sniper_id,
      weapon_ar:ar_id
    }

    console.log(dataToSave)
    return dataToSave;
  } catch (err) {
    console.log(err);
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

    const categoryDocument = await R5model.create(Q5dataToInsert)
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

import { fightModel } from "./fightsModel.js";

export const createFight = async (data)=>{
  try {
    const savedDocument = await fightModel.create(data);
    return savedDocument;
  } catch (error) {
    console.error("Error saving document:", error);
    throw error;
  }
}
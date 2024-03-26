import { fightModel } from "./fightsModel.js";

export const createFight = async(data)=>{
  try {
    fightModel
      .create(data)
      .then((savedDocument) => {
        console.log("Document saved successfully:", savedDocument);
        return savedDocument;
      })
      .catch((error) => {
        console.error("Error saving document:", error);
      });
  } catch (e) {
    console.error(e);
  }
      
  return null;
}
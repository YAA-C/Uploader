import { fightModel } from "./fightsModel.js";

export const createFight = async(data)=>{
    try {
        fightModel
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
}
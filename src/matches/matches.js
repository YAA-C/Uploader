import { matchesModel } from "./matchesModel.js";

export const createMatch = async(data)=>{
    try {
        matchesModel
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

export const updateIsAnalyzed = async (matchId, isAnalyzed) => {
  try {
    const updatedMatch = await matchesModel.findByIdAndUpdate(
      matchId,
      { $set: { is_Analyzed: isAnalyzed } },
      { new: true }
    );

    if (!updatedMatch) {
      console.log("Match not found");
      throw new Error(`match_id ${matchId} not found...`);
    }

    return updatedMatch;
  } catch (error) {
    console.error("Error updating match:", error);
    throw error;
  }
};

export const updateCharts = async (matchId, chartsData) => {
  try {
    const updatedMatch = await matchesModel.findByIdAndUpdate(
      matchId,
      { $set: { charts: chartsData } },
      { new: true }
    );

    if (!updatedMatch) {
      console.log("Match not found");
      throw new Error(`match_id ${matchId} not found...`);
    }

    return updatedMatch;
  } catch (error) {
    console.error("Error updating match:", error);
    return error;
  }
};

export const updatePlayers = async (matchId, playersData) => {
  try {
    const updatedMatch = await matchesModel.findByIdAndUpdate(
      matchId,
      { $set: { players: playersData } },
      { new: true }
    );

    if (!updatedMatch) {
      console.log("Match not found");
      throw new Error(`match_id ${matchId} not found...`);
    }

    return updatedMatch;
  } catch (error) {
    console.error("Error updating match:", error);
    return error;
  }
};
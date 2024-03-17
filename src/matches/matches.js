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
      return null;
    }

    console.log("Match updated successfully:", updatedMatch);
    return updatedMatch;
  } catch (error) {
    console.error("Error updating match:", error);
    return null;
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
      return null;
    }

    console.log("Match updated successfully:", updatedMatch);
    return updatedMatch;
  } catch (error) {
    console.error("Error updating match:", error);
    return null;
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
      return null;
    }

    console.log("Match updated successfully:", updatedMatch);
    return updatedMatch;
  } catch (error) {
    console.error("Error updating match:", error);
    return null;
  }
};
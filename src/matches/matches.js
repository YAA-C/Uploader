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
    const updatedChartsData = { ...chartsData };
    const checklist = {
      weapon_category_ar: ['weapon_ak47', 'weapon_aug', 'weapon_famas', 'weapon_galilar', 'weapon_m4a1_silencer', 'weapon_m4a1', 'weapon_sg556'],
      weapon_category_smg: ['weapon_bizon', 'weapon_mac10', 'weapon_mp5sd', 'weapon_mp7', 'weapon_mp9', 'weapon_ump45', 'weapon_p90'],
      weapon_category_sniper: ['weapon_awp', 'weapon_ssg08', 'weapon_g3sg1', 'weapon_scar20'],
      weapon_category_lmg: ['weapon_m249', 'weapon_negev'],
      weapon_category_pistol: ['weapon_deagle', 'weapon_elite', 'weapon_fiveseven', 'weapon_glock', 'weapon_hkp2000', 'weapon_usp_silencer', 'weapon_cz75a', 'weapon_p250', 'weapon_tec9'],
      weapon_category_shotgun: ['weapon_mag7', 'weapon_nova', 'weapon_xm1014', 'weapon_sawedoff']
    };

    if (!updatedChartsData.report_5) {
      updatedChartsData.report_5 = {};
    }

    for (const category in checklist) {
      if (checklist.hasOwnProperty(category)) {
        if (!updatedChartsData.report_5[category]) {
          updatedChartsData.report_5[category] = {};
        }
        for (const weapon of checklist[category]) {
          if (!updatedChartsData.report_5[category][weapon]) {
            updatedChartsData.report_5[category][weapon] = null;
          }
        }
      }
    }

    const updatedMatch = await matchesModel.findByIdAndUpdate(
      matchId,
      { $set: { charts: updatedChartsData } },
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
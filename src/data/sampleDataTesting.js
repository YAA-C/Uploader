export const Q5values = [
  // Sample data for weapon_category_ar
  {
    weapon_category: "weapon_category_ar",
    weapons: {
      weapon_ak47: {
        data: [0, 0, 0, 7, 27, 96],
        labels: ["0-50", "50-100", "100-200", "200-300", "300-500", "500+"],
      },
      weapon_famas: {
        data: [0, 0, 0, 0, 0, 8],
        labels: ["0-50", "50-100", "100-200", "200-300", "300-500", "500+"],
      },
      weapon_galilar: {
        data: [0, 0, 0, 1, 16, 5],
        labels: ["0-50", "50-100", "100-200", "200-300", "300-500", "500+"],
      },
      weapon_m4a1: {
        data: [0, 0, 0, 1, 7, 12],
        labels: ["0-50", "50-100", "100-200", "200-300", "300-500", "500+"],
      },
      weapon_m4a1_silencer: {
        data: [0, 0, 2, 4, 22, 90],
        labels: ["0-50", "50-100", "100-200", "200-300", "300-500", "500+"],
      },
    },
  },
  // Sample data for weapon_category_pistol
  {
    weapon_category: "weapon_category_pistol",
    weapons: {
      weapon_deagle: {
        data: [0, 0, 0, 0, 3, 11],
        labels: ["0-50", "50-100", "100-200", "200-300", "300-500", "500+"],
      },
      weapon_elite: {
        data: [0, 0, 0, 1, 2, 2],
        labels: ["0-50", "50-100", "100-200", "200-300", "300-500", "500+"],
      },
      weapon_fiveseven: {
        data: [0, 0, 0, 0, 0, 2],
        labels: ["0-50", "50-100", "100-200", "200-300", "300-500", "500+"],
      },
      weapon_glock: {
        data: [0, 0, 0, 6, 4, 8],
        labels: ["0-50", "50-100", "100-200", "200-300", "300-500", "500+"],
      },
      weapon_p250: {
        data: [0, 0, 0, 0, 2, 17],
        labels: ["0-50", "50-100", "100-200", "200-300", "300-500", "500+"],
      },
      weapon_tec9: {
        data: [0, 0, 2, 5, 1, 2],
        labels: ["0-50", "50-100", "100-200", "200-300", "300-500", "500+"],
      },
      weapon_usp_silencer: {
        data: [0, 0, 1, 5, 4, 22],
        labels: ["0-50", "50-100", "100-200", "200-300", "300-500", "500+"],
      },
    },
  },
  // Sample data for weapon_category_smg
  {
    weapon_category: "weapon_category_smg",
    weapons: {
      weapon_mac10: {
        data: [0, 0, 2, 1, 8, 16],
        labels: ["0-50", "50-100", "100-200", "200-300", "300-500", "500+"],
      },
      weapon_mp9: {
        data: [0, 0, 1, 17, 19, 18],
        labels: ["0-50", "50-100", "100-200", "200-300", "300-500", "500+"],
      },
    },
  },
  // Sample data for weapon_category_sniper
  {
    weapon_category: "weapon_category_sniper",
    weapons: {
      weapon_awp: {
        data: [0, 0, 0, 0, 2, 20],
        labels: ["0-50", "50-100", "100-200", "200-300", "300-500", "500+"],
      },
    },
  },
];

export const Q1Labels = [
  "weapon_ak47",
  "weapon_m4a1_silencer",
  "weapon_awp",
  "weapon_usp_silencer",
  "weapon_mp9",
  "weapon_deagle",
  "weapon_mac10",
  "weapon_galilar",
  "weapon_m4a1",
  "weapon_glock",
  "weapon_p250",
  "weapon_famas",
  "weapon_elite",
  "weapon_tec9",
  "weapon_fiveseven",
];
export const Q1Data = [
  6170, 5536, 3089, 1922, 1898, 1143, 1066, 904, 881, 845, 671, 401, 331, 255,
  58,
];

export const Q2Labels = [
  "CHEST",
  "HEAD",
  "STOMACH",
  "RIGHTARM",
  "RIGHTLEG",
  "LEFTARM",
  "LEFTLEG",
  "GEAR",
];
export const Q2Data = [251, 91, 81, 40, 16, 13, 8, 2];

export const Q3Labels = ["ar", "pistol", "sniper", "smg"];
export const Q3Data = [13892.0, 5225.0, 3089.0, 2964.0];

export const Q4Labels = ["No Movement", "Crouching"];
export const Q4Data = [26349.0, 11632.0];

export const Q6Labels = ["Obstructed Shots", "Non-Obstructed Shots"];
export const Q6Data = [2957, 35024];

export const Q7HistData = [
  54, 5, 48, 20, 17, 6, 7, 3, 4, 3, 3, 80, 140, 247, 128, 364, 520, 787, 1248,
  1397, 2741, 3569, 4514, 3982, 4268, 2649, 2474, 1847, 1608, 1266, 1131, 713,
  595, 324, 253, 159, 72, 48, 66, 59, 66, 50, 1, 34, 9, 5, 5, 12, 33, 20, 13,
  10, 20, 11, 3, 8, 1, 5, 4, 3,
];
export const Q7HistEdges = [
  -22.4395751953125, -21.4395751953125, -20.4395751953125, -19.4395751953125,
  -18.4395751953125, -17.4395751953125, -16.4395751953125, -15.4395751953125,
  -14.4395751953125, -13.4395751953125, -12.4395751953125, -11.4395751953125,
  -10.4395751953125, -9.4395751953125, -8.4395751953125, -7.4395751953125,
  -6.4395751953125, -5.4395751953125, -4.4395751953125, -3.4395751953125,
  -2.4395751953125, -1.4395751953125, -0.4395751953125, 0.5604248046875,
  1.5604248046875, 2.5604248046875, 3.5604248046875, 4.5604248046875,
  5.5604248046875, 6.5604248046875, 7.5604248046875, 8.5604248046875,
  9.5604248046875, 10.5604248046875, 11.5604248046875, 12.5604248046875,
  13.5604248046875, 14.5604248046875, 15.5604248046875, 16.5604248046875,
  17.5604248046875, 18.5604248046875, 19.5604248046875, 20.5604248046875,
  21.5604248046875, 22.5604248046875, 23.5604248046875, 24.5604248046875,
  25.5604248046875, 26.5604248046875, 27.5604248046875, 28.5604248046875,
  29.5604248046875, 30.5604248046875, 31.5604248046875, 32.5604248046875,
  33.5604248046875, 34.5604248046875, 35.5604248046875, 36.5604248046875,
];

export const Q8Labels = [
  "Average Utility Damage Done",
  "Average Support Utility Used",
];
export const Q8Data = [4.058597476942648, 0.6611099332131878];

export const Q9values = {
  sniper: {
    labels: ["Scoping", "Not Scoping"],
    data: [0, 22],
  },
  scopingAR: {
    labels: ["Scoping", "Not Scoping"],
    data: [0, 0],
  },
};

export const Q10Labels = ["Blind Shots", "Not Blind Shots"];
export const Q10Data = [61, 37540];

// ******************************************************************* //

export const fightsData = {
  "match_id": "6159f3e1b324c2e27c417d4f",
  "playerSteamId": "76561198016351097",
  "targetSteamId": "76561198049530060",
  "playerName": "Player1",
  "targetName": "Target1",
  "data": [
    {
      "playerX": 10,
      "playerY": 20,
      "targetX": 30,
      "targetY": 40,
      "isHurt": true
    },
    {
      "playerX": 15,
      "playerY": 25,
      "targetX": 35,
      "targetY": 45,
      "isHurt": false
    }
  ]
};

export const matchesData = {
  "account_id": "6159f3e1b324c2e27c417d4f",
  "charts": {
    "Q1_id": "6159f3e1b324c2e27c417d4d",
    "Q2_id": "6159f3e1b324c2e27c417d4e",
    "Q3_id": "6159f3e1b324c2e27c417d4c",
    "Q4_id": "6159f3e1b324c2e27c417d4b",
    "No_5": {
      "weapon_category_ar": {
        "weapon_ak47_id": "6159f3e1b324c2e27c417d4a",
        "weapon_famas_id": "6159f3e1b324c2e27c417d49",
        "weapon_galilar_id": "6159f3e1b324c2e27c417d48",
        "weapon_m4a1_id": "6159f3e1b324c2e27c417d47",
        "weapon_m4a1_silencer_id": "6159f3e1b324c2e27c417d46"
      },
      "weapon_category_pistol": {
        "weapon_deagle_id": "6159f3e1b324c2e27c417d45",
        "weapon_elite_id": "6159f3e1b324c2e27c417d44",
        "weapon_fiveseven_id": "6159f3e1b324c2e27c417d43",
        "weapon_glock_id": "6159f3e1b324c2e27c417d42",
        "weapon_p250_id": "6159f3e1b324c2e27c417d41",
        "weapon_tec9_id": "6159f3e1b324c2e27c417d40",
        "weapon_usp_silencer_id": "6159f3e1b324c2e27c417d3f"
      },
      "weapon_category_smg": {
        "weapon_mac10_id": "6159f3e1b324c2e27c417d3e",
        "weapon_mp9_id": "6159f3e1b324c2e27c417d3d"
      },
      "weapon_category_sniper": {
        "weapon_awp_id": "6159f3e1b324c2e27c417d3c"
      }
    },
    "Q6_id": "6159f3e1b324c2e27c417d3b",
    "Q7_id": "6159f3e1b324c2e27c417d3a",
    "Q8_id": "6159f3e1b324c2e27c417d39",
    "Q9_id": "6159f3e1b324c2e27c417d38",
    "Q10_id": "6159f3e1b324c2e27c417d37"
  },
  "is_Analyzed": false,
  "tebi_Link": "https://example.com",
  "players": [
    {
      "steamid": "76561198016351097",
      "playerName": "Player1",
      "isCheating": false
    },
    {
      "steamid": "76561198049530060",
      "playerName": "Player2",
      "isCheating": true
    }
  ]
};

export const chartsData = {
  Q1_id: "6159f3e1b324c2e27c417d4d",
  Q2_id: "6159f3e1b324c2e27c417d4d",
  Q3_id: "6159f3e1b324c2e27c417d4d",
  Q4_id: "6159f3e1b324c2e27c417d4d",
  No_5: {
    weapon_category_ar: {
      weapon_ak47_id: "6159f3e1b324c2e27c417d4a",
      weapon_famas_id: "6159f3e1b324c2e27c417d49",
      weapon_galilar_id: "6159f3e1b324c2e27c417d48",
      weapon_m4a1_id: "6159f3e1b324c2e27c417d47",
      weapon_m4a1_silencer_id: "6159f3e1b324c2e27c417d46"
    },
    weapon_category_pistol: {
      weapon_deagle_id: "6159f3e1b324c2e27c417d45",
      weapon_elite_id: "6159f3e1b324c2e27c417d44",
      weapon_fiveseven_id: "6159f3e1b324c2e27c417d43",
      weapon_glock_id: "6159f3e1b324c2e27c417d42",
      weapon_p250_id: "6159f3e1b324c2e27c417d41",
      weapon_tec9_id: "6159f3e1b324c2e27c417d40",
      weapon_usp_silencer_id: "6159f3e1b324c2e27c417d3f"
    },
    weapon_category_smg: {
      weapon_mac10_id: "6159f3e1b324c2e27c417d3e",
      weapon_mp9_id: "6159f3e1b324c2e27c417d3d"
    },
    weapon_category_sniper: {
      weapon_awp_id: "6159f3e1b324c2e27c417d3c"
    }
  },
  Q6_id: "6159f3e1b324c2e27c417d3b",
  Q7_id: "6159f3e1b324c2e27c417d3a",
  Q8_id: "6159f3e1b324c2e27c417d39",
  Q9_id: "6159f3e1b324c2e27c417d38",
  Q10_id: "6159f3e1b324c2e27c417d37"
};

export const newPlayersData = [
  {
    steamid: "new_steamid1",
    playerName: "Updated 1",
    isCheating: false
  },
  {
    steamid: "new_steamid2",
    playerName: "New Player 2",
    isCheating: true
  }
];

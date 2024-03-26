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

export const Q7Data = [
  54, 5, 48, 20, 17, 6, 7, 3, 4, 3, 3, 80, 140, 247, 128, 364, 520, 787, 1248,
  1397, 2741, 3569, 4514, 3982, 4268, 2649, 2474, 1847, 1608, 1266, 1131, 713,
  595, 324, 253, 159, 72, 48, 66, 59, 66, 50, 1, 34, 9, 5, 5, 12, 33, 20, 13,
  10, 20, 11, 3, 8, 1, 5, 4, 3,
];

export const Q7Labels = [
  "-22.4395751953125",
  "-21.4395751953125",
  "-20.4395751953125",
  "-19.4395751953125",
  "-18.4395751953125",
  "-17.4395751953125",
  "-16.4395751953125",
  "-15.4395751953125",
  "-14.4395751953125",
  "-13.4395751953125",
  "-12.4395751953125",
  "-11.4395751953125",
  "-10.4395751953125",
  "-9.4395751953125",
  "-8.4395751953125",
  "-7.4395751953125",
  "-6.4395751953125",
  "-5.4395751953125",
  "-4.4395751953125",
  "-3.4395751953125",
  "-2.4395751953125",
  "-1.4395751953125",
  "-0.4395751953125",
  "0.5604248046875",
  "1.5604248046875",
  "2.5604248046875",
  "3.5604248046875",
  "4.5604248046875",
  "5.5604248046875",
  "6.5604248046875",
  "7.5604248046875",
  "8.5604248046875",
  "9.5604248046875",
  "10.5604248046875",
  "11.5604248046875",
  "12.5604248046875",
  "13.5604248046875",
  "14.5604248046875",
  "15.5604248046875",
  "16.5604248046875",
  "17.5604248046875",
  "18.5604248046875",
  "19.5604248046875",
  "20.5604248046875",
  "21.5604248046875",
  "22.5604248046875",
  "23.5604248046875",
  "24.5604248046875",
  "25.5604248046875",
  "26.5604248046875",
  "27.5604248046875",
  "28.5604248046875",
  "29.5604248046875",
  "30.5604248046875",
  "31.5604248046875",
  "32.5604248046875",
  "33.5604248046875",
  "34.5604248046875",
  "35.5604248046875",
  "36.5604248046875",
];

// export const Q7HistEdges = [
//   -22.4395751953125, -21.4395751953125, -20.4395751953125, -19.4395751953125,
//   -18.4395751953125, -17.4395751953125, -16.4395751953125, -15.4395751953125,
//   -14.4395751953125, -13.4395751953125, -12.4395751953125, -11.4395751953125,
//   -10.4395751953125, -9.4395751953125, -8.4395751953125, -7.4395751953125,
//   -6.4395751953125, -5.4395751953125, -4.4395751953125, -3.4395751953125,
//   -2.4395751953125, -1.4395751953125, -0.4395751953125, 0.5604248046875,
//   1.5604248046875, 2.5604248046875, 3.5604248046875, 4.5604248046875,
//   5.5604248046875, 6.5604248046875, 7.5604248046875, 8.5604248046875,
//   9.5604248046875, 10.5604248046875, 11.5604248046875, 12.5604248046875,
//   13.5604248046875, 14.5604248046875, 15.5604248046875, 16.5604248046875,
//   17.5604248046875, 18.5604248046875, 19.5604248046875, 20.5604248046875,
//   21.5604248046875, 22.5604248046875, 23.5604248046875, 24.5604248046875,
//   25.5604248046875, 26.5604248046875, 27.5604248046875, 28.5604248046875,
//   29.5604248046875, 30.5604248046875, 31.5604248046875, 32.5604248046875,
//   33.5604248046875, 34.5604248046875, 35.5604248046875, 36.5604248046875,
// ];

export const Q8Labels = [
  "Average Utility Damage Done",
  "Average Support Utility Used",
];
export const Q8Data = [4.058597476942648, 0.6611099332131878];

export const Q9values = {
  weapon_sniper: {
    labels: ["Scoping", "Not Scoping"],
    data: [0, 22],
  },
  weapon_ar: {
    labels: ["Scoping", "Not Scoping"],
    data: [0, 0],
  },
};

export const Q10Labels = ["Blind Shots", "Not Blind Shots"];
export const Q10Data = [61, 37540];

// ******************************************************************* //

export const fightsData = {
  match_id: "6159f3e1b324c2e27c417d4f",
  playerSteamId: "76561198016351097",
  targetSteamId: "76561198049530060",
  playerName: "Player1",
  targetName: "Target1",
  isCheating: false,
  data: [
    {
      playerX: 10,
      playerY: 20,
      targetX: 30,
      targetY: 40,
      isHurt: true,
    },
    {
      playerX: 15,
      playerY: 25,
      targetX: 35,
      targetY: 45,
      isHurt: false,
    },
  ],
};

export const matchesData = {
  account_id: "6159f3e1b324c2e27c417d4f",
  charts: {
    report_1: "6159f3e1b324c2e27c417d4d",
    report_2: "6159f3e1b324c2e27c417d4e",
    report_3: "6159f3e1b324c2e27c417d4c",
    report_4: "6159f3e1b324c2e27c417d4b",
    report_5: {
      weapon_category_ar: {
        weapon_ak47: "6159f3e1b324c2e27c417d4a",
        weapon_famas: "6159f3e1b324c2e27c417d49",
        weapon_galilar: "6159f3e1b324c2e27c417d48",
        weapon_m4a1: "6159f3e1b324c2e27c417d47",
        weapon_m4a1_silencer: "6159f3e1b324c2e27c417d46",
      },
      weapon_category_pistol: {
        weapon_deagle: "6159f3e1b324c2e27c417d45",
        weapon_elite: "6159f3e1b324c2e27c417d44",
        weapon_fiveseven: "6159f3e1b324c2e27c417d43",
        weapon_glock: "6159f3e1b324c2e27c417d42",
        weapon_p250: "6159f3e1b324c2e27c417d41",
        weapon_tec9: "6159f3e1b324c2e27c417d40",
        weapon_usp_silencer: "6159f3e1b324c2e27c417d3f",
      },
      weapon_category_smg: {
        weapon_mac10: "6159f3e1b324c2e27c417d3e",
        weapon_mp9: "6159f3e1b324c2e27c417d3d",
      },
      weapon_category_sniper: {
        weapon_awp: "6159f3e1b324c2e27c417d3c",
      },
    },
    report_6: "6159f3e1b324c2e27c417d3b",
    report_7: "6159f3e1b324c2e27c417d3a",
    report_8: "6159f3e1b324c2e27c417d39",
    report_9: {
      weapon_ar: "6159f3e1b324c2e27c417d3b",
      weapon_sniper: "6159f3e1b324c2e27c417d41",
    },
    report_10: "6159f3e1b324c2e27c417d37",
  },
  is_Analyzed: false,
  tebi_Link: "https://example.com",
  players: [
    {
      steamid: "76561198016351097",
      playerName: "Player1",
      isCheating: false,
    },
    {
      steamid: "76561198049530060",
      playerName: "Player2",
      isCheating: true,
    },
  ],
};

export const chartsData = {
  report_1: "6159f3e1b324c2e27c417d4d",
  report_2: "6159f3e1b324c2e27c417d4e",
  report_3: "6159f3e1b324c2e27c417d4c",
  report_4: "6159f3e1b324c2e27c417d4b",
  report_5: {
    weapon_category_ar: {
      weapon_ak47: "6159f3e1b324c2e27c417d4a",
      weapon_famas: "6159f3e1b324c2e27c417d49",
      weapon_galilar: "6159f3e1b324c2e27c417d48",
      weapon_m4a1: "6159f3e1b324c2e27c417d47",
      weapon_m4a1_silencer: "6159f3e1b324c2e27c417d46",
    },
    weapon_category_pistol: {
      weapon_deagle: "6159f3e1b324c2e27c417d45",
      weapon_elite: "6159f3e1b324c2e27c417d44",
      weapon_fiveseven: "6159f3e1b324c2e27c417d43",
      weapon_glock: "6159f3e1b324c2e27c417d42",
      weapon_p250: "6159f3e1b324c2e27c417d41",
      weapon_tec9: "6159f3e1b324c2e27c417d40",
      weapon_usp_silencer: "6159f3e1b324c2e27c417d3f",
    },
    weapon_category_smg: {
      weapon_mac10: "6159f3e1b324c2e27c417d3e",
      weapon_mp9: "6159f3e1b324c2e27c417d3d",
    },
    weapon_category_sniper: {
      weapon_awp: "6159f3e1b324c2e27c417d3c",
    },
    weapon_category_shotgun: {
      weapon_mag7: "60af5d29b6d80c00152e8050",
      weapon_nova: "60af5d29b6d80c00152e8051",
    },
  },
  report_6: "6159f3e1b324c2e27c417d3b",
  report_7: "6159f3e1b324c2e27c417d3a",
  report_8: "6159f3e1b324c2e27c417d39",
  report_9: {
    weapon_ar: "6159f3e1b324c2e27c417d3b",
    weapon_sniper: "6159f3e1b324c2e27c417d41",
  },
  report_10: "6159f3e1b324c2e27c417d37",
};

export const newPlayersData = [
  {
    steamid: "new_steamid1",
    playerName: "Updated 1",
    isCheating: false,
  },
  {
    steamid: "new_steamid2",
    playerName: "New Player 2",
    isCheating: true,
  },
];

// export const newMatchesDataTesting = {
//   "account_id": "60af5d29b6d80c00152e8000",
//   "charts": {
//     "report_1": "60af5d29b6d80c00152e8011",
//     "report_2": "60af5d29b6d80c00152e8012",
//     "report_3": "60af5d29b6d80c00152e8013",
//     "report_4": "60af5d29b6d80c00152e8014",
//     "report_5": {
//       "weapon_category_ar": {
//         "weapon_ak47": "60af5d29b6d80c00152e8021",
//         "weapon_aug": "60af5d29b6d80c00152e8022",
//         "weapon_famas": "60af5d29b6d80c00152e8023",
//         "weapon_galilar": "60af5d29b6d80c00152e8024",
//         "weapon_m4a1_silencer": "60af5d29b6d80c00152e8025",
//         "weapon_m4a1": "60af5d29b6d80c00152e8026",
//         "weapon_sg556": "60af5d29b6d80c00152e8027",
//       },
//       "weapon_category_smg": {
//         "weapon_bizon": "60af5d29b6d80c00152e8028",
//         "weapon_mac10": "60af5d29b6d80c00152e8029",
//         "weapon_mp5sd": "60af5d29b6d80c00152e8030",
//         "weapon_mp7": "60af5d29b6d80c00152e8031",
//         "weapon_mp9": "60af5d29b6d80c00152e8032",
//         "weapon_ump45": "60af5d29b6d80c00152e8033",
//         "weapon_p90": "60af5d29b6d80c00152e8034",
//       },
//       "weapon_category_sniper": {
//         "weapon_awp": "60af5d29b6d80c00152e8035",
//         "weapon_ssg08": "60af5d29b6d80c00152e8036",
//         "weapon_g3sg1": "60af5d29b6d80c00152e8037",
//         "weapon_scar20": "60af5d29b6d80c00152e8038",
//       },
//       "weapon_category_lmg": {
//         "weapon_m249": "60af5d29b6d80c00152e8039",
//         "weapon_negev": "60af5d29b6d80c00152e8040",
//       },
//       "weapon_category_pistol": {
//         "weapon_deagle": "60af5d29b6d80c00152e8041",
//         "weapon_elite": "60af5d29b6d80c00152e8042",
//         "weapon_fiveseven": "60af5d29b6d80c00152e8043",
//         "weapon_glock": "60af5d29b6d80c00152e8044",
//         "weapon_hkp2000": "60af5d29b6d80c00152e8045",
//         "weapon_usp_silencer": "60af5d29b6d80c00152e8046",
//         "weapon_cz75a": "60af5d29b6d80c00152e8047",
//         "weapon_p250": "60af5d29b6d80c00152e8048",
//         "weapon_tec9": "60af5d29b6d80c00152e8049",
//       },
//       "weapon_category_shotgun": {
//         "weapon_mag7": "60af5d29b6d80c00152e8050",
//         "weapon_nova": "60af5d29b6d80c00152e8051",
//         "weapon_xm1014": "60af5d29b6d80c00152e8052",
//         "weapon_sawedoff":"60af5d29b6d80c00152e8053"
//     },
//     "report_6": "60af5d29b6d80c00152e8015",
//     "report_7": "60af5d29b6d80c00152e8016",
//     "report_8": "60af5d29b6d80c00152e8017",
//     "report_9": {
//       "weapon_ar": "60af5d29b6d80c00152e8018",
//       "weapon_sniper": "60af5d29b6d80c00152e8019",
//     },
//     "report_10": "60af5d29b6d80c00152e8020",
//   },
//   "is_Analyzed": false,
//   "tebi_Link": "https://sample-link.com",
//   "players": [
//     {
//       "steamid": "123456789",
//       "playerName": "Player1",
//       "isCheating": false,
//     },
//     {
//       "steamid": "987654321",
//       "playerName": "Player2",
//       "isCheating": true,
//     },
//   ]
// }

export const newMatchesDataTesting = {
  account_id: "60af5d29b6d80c00152e8000",
  charts: {
    report_1: "60af5d29b6d80c00152e8011",
    report_2: "60af5d29b6d80c00152e8012",
    report_3: "60af5d29b6d80c00152e8013",
    report_4: "60af5d29b6d80c00152e8014",
    report_5: {
      weapon_category_ar: {
        weapon_ak47: "60af5d29b6d80c00152e8021",
        weapon_aug: "60af5d29b6d80c00152e8022",
        weapon_famas: "60af5d29b6d80c00152e8023",
        weapon_galilar: "60af5d29b6d80c00152e8024",
        weapon_m4a1_silencer: "60af5d29b6d80c00152e8025",
        weapon_m4a1: "60af5d29b6d80c00152e8026",
        weapon_sg556: "60af5d29b6d80c00152e8027",
      },
      weapon_category_smg: {
        weapon_bizon: "60af5d29b6d80c00152e8028",
        weapon_mac10: "60af5d29b6d80c00152e8029",
        weapon_mp5sd: "60af5d29b6d80c00152e8030",
        weapon_mp7: "60af5d29b6d80c00152e8031",
        weapon_mp9: "60af5d29b6d80c00152e8032",
        weapon_ump45: "60af5d29b6d80c00152e8033",
        weapon_p90: "60af5d29b6d80c00152e8034",
      },
      weapon_category_sniper: {
        weapon_awp: "60af5d29b6d80c00152e8035",
        weapon_ssg08: "60af5d29b6d80c00152e8036",
        weapon_g3sg1: "60af5d29b6d80c00152e8037",
        weapon_scar20: "60af5d29b6d80c00152e8038",
      },
      weapon_category_lmg: {
        weapon_m249: "60af5d29b6d80c00152e8039",
        weapon_negev: "60af5d29b6d80c00152e8040",
      },
      weapon_category_pistol: {
        weapon_deagle: "60af5d29b6d80c00152e8041",
        weapon_elite: "60af5d29b6d80c00152e8042",
        weapon_fiveseven: "60af5d29b6d80c00152e8043",
        weapon_glock: "60af5d29b6d80c00152e8044",
        weapon_hkp2000: "60af5d29b6d80c00152e8045",
        weapon_usp_silencer: "60af5d29b6d80c00152e8046",
        weapon_cz75a: "60af5d29b6d80c00152e8047",
        weapon_p250: "60af5d29b6d80c00152e8048",
        weapon_tec9: "60af5d29b6d80c00152e8049",
      },
      weapon_category_shotgun: {
        weapon_mag7: "60af5d29b6d80c00152e8050",
        weapon_nova: "60af5d29b6d80c00152e8051",
        weapon_xm1014: "60af5d29b6d80c00152e8052",
        weapon_sawedoff: "60af5d29b6d80c00152e8053", // Comma added here
      },
    },
    report_6: "60af5d29b6d80c00152e8015",
    report_7: "60af5d29b6d80c00152e8016",
    report_8: "60af5d29b6d80c00152e8017",
    report_9: {
      weapon_ar: "60af5d29b6d80c00152e8018",
      weapon_sniper: "60af5d29b6d80c00152e8019",
    },
    report_10: "60af5d29b6d80c00152e8020",
  },
  is_Analyzed: false,
  tebi_Link: "https://sample-link.com",
  players: [
    {
      steamid: "123456789",
      playerName: "Player1",
      isCheating: false,
    },
    {
      steamid: "987654321",
      playerName: "Player2",
      isCheating: true,
    },
  ],
};

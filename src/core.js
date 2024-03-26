import { createPie, createBar, createHist } from "./charts/charts.js";
import { createFight } from "./fights/fights.js";
import { updateIsAnalyzed, updateCharts , updatePlayers, createMatch} from "./matches/matches.js";


const handleReport5 = async (reportData) => {
    const result = {};
    const weaponCategories = Object.keys(reportData);

    for (let i = 0; i < weaponCategories.length; i++) {
        const categoryName = weaponCategories[i];
        const categoryData = reportData[categoryName];
        const categoryObject = {}

        const weaponNames = Object.keys(categoryData);

        for (let j = 0; j < weaponNames.length; j++) {
            const weaponName = weaponNames[j];

            const weaponData = categoryData[weaponName];
            const chartObj = await createPie(weaponData);

            categoryObject[weaponName] = chartObj._id;
        }

        result[categoryName] = categoryObject;
    }

    return result;
}

const handleReport9 = async (reportData) => {
    const chartObj1 = await createPie(reportData.weapon_sniper);
    const chartObj2 = await createPie(reportData.weapon_ar);

    const result = {
      weapon_sniper: chartObj1._id,
      weapon_ar: chartObj2._id
    }

    return result;
}


const handleCommonReport = async (reportData, reportType) => {
    let chartObj = null;
    switch(reportType) {
        case "BAR":
            // Barchart report
            chartObj = await createBar(reportData);
            break;
        case "PIE":
            // Piechart report
            chartObj = await createPie(reportData);
            break;
        case "HIST":
            // Histogram report
            chartObj = await createHist(reportData);
            break;
    }
    return chartObj;
}


const uploadReportData = async (data) => {
    const match_id = data.metadata.match_id;
    // const match_id = "660177e07a125db79504229b";
    
    let allReportData = data.data;
    let chartObj = null;

    const reportKeys = Object.keys(allReportData);
    
    for (let i = 0; i < reportKeys.length; i++) {
        const reportName = reportKeys[i];
        const reportData = allReportData[reportName];
        
        switch(reportName) {
            case "report_5":
                // handle for report 5
                chartObj = await handleReport5(reportData);
                allReportData[reportName] = chartObj;
                break;
            case "report_9":
                // handle for report 9
                chartObj = await handleReport9(reportData);
                allReportData[reportName] = chartObj;
                break;
            default:
            {
                const reportType = data.metadata.report_types[reportName];
                chartObj = await handleCommonReport(reportData, reportType);
                allReportData[reportName] = chartObj._id;
            }
        }
    }

    await updateCharts(match_id, allReportData)
}

const uploadFightData = () => {
    return 0;
}

const uploadResultData = () => {
    return 0;
}

export { uploadReportData, uploadFightData, uploadResultData };
import { createPie, createBar, createHist } from "./charts/charts.js";
import { createFight } from "./fights/fights.js";
import { updateIsAnalyzed, updateCharts , updatePlayers} from "./matches/matches.js";


const uploadReportData = (data) => {
    const match_id = data.metadata.match_id;
    const allReportData = data.data;

    const reportKeys = Object.keys(allReportData);
    for (let i = 0; i < reportKeys.length; i++) {
        const reportName = reportKeys[i];
        const reportData = allReportData[reportName];
        
        switch(reportName) {
            case "report_5":
                // handle for report 5
                break;
            case "report_9":
                // handle for report 9
                break;
            default:
            {
                const reportType = data.metadata.report_types[reportName];
                switch(reportType) {
                    case "BAR":
                        // Barchart report
                        createBar(reportData);
                        break;
                    case "PIE":
                        // Piechart report
                        createPie(reportData);
                        break;
                    case "HIST":
                        createHist(reportData);
                        // Histogram report
                        break;
                }
            }
        }
    }
}

const uploadFightData = () => {
    return 0;
}

const uploadResultData = () => {
    return 0;
}

export { uploadReportData, uploadFightData, uploadResultData };
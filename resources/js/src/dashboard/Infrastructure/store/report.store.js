import ReportService from "../services/report.service";

const state = {
    reportService: new ReportService(),
}


const initStore = async () => {
    console.log('InitStore 🥑');
}

/**
 * Function to get category selected 
 * @param {ReportService} reportService 
 */
const getUserStatusService = () => {
    return state.reportService;
}
/**
 * Function to get category selected 
 * @param {ReportService} reportService 
 */
const getCoursesCategoryService = () => {
    return state.reportService;
}
export default {
    initStore,
    getUserStatusService,
    getCoursesCategoryService
}
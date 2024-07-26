import reportStore from "../../Infrastructure/store/report.store";
import { drawUsersChart } from "../../Presentation/utils/active-users-chart";

/**
 * load active and inactive data to chart 
 */
export const loadUsersDataToDoughnutChart =async () => {
    try {
        const reportService = reportStore.getUserStatusService();
        const userStatus = await reportService.getAllUserStatus();

        drawUsersChart(userStatus);

        return true;
    } catch (error) {
        throw error;
    }
}

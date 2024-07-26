import { renderDashboardEvents } from "./Application/events/dashboard-events";
import { loadCategoriesDataToBarChart } from "./Application/useCases/load-categories-data.usecase";
import { loadUsersDataToDoughnutChart } from "./Application/useCases/load-users-data.usecase";

const DashboardApp = () => {
    (async () => {
        loadUsersDataToDoughnutChart();
        loadCategoriesDataToBarChart()
    })();

    renderDashboardEvents();
}

DashboardApp()

import reportStore from "../../Infrastructure/store/report.store";
import { drawCoursesByCategoriesChart } from "../../Presentation/utils/count-courses-by-categories-chart";

/**
 * load active and inactive data to chart 
 */
export const loadCategoriesDataToBarChart = async () => {
    try {
        const reportService = reportStore.getCoursesCategoryService();
        const data = await reportService.getAllCoursesCategory();

        drawCoursesByCategoriesChart(data);

        return true;
    } catch (error) {
        throw error;
    }
}
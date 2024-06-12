import { confirmAlert, loadingAlert, notifyAlert } from "../../../utils/alerts";
import courseStore from "../../Infrastructure/store/course.store";

/**
 * Function to delete a course
 * @param {int} id
 * @return bool 
 */
export const deleteCourse = (id) => {
    if (!id)
        throw new Error('Argument :id is required');

    try {
        const title = "Confirm Course Deletion";
        const message = "Are you sure you want to delete this course? This action cannot be undone and the course's data will be permanently removed from the system.";
        confirmAlert(title, message, async ({ value }) => {
            if (!value) return;

            loadingAlert();

            const service = courseStore.getCourseService();
            await service.deleteById(id);

            notifyAlert("Success!", "Course record has been successfully deleted!");

            const datatable = courseStore.getCourseDatatable();
            datatable.ajax.reload();
        });

        return true;
    } catch (error) {
        throw error;
    }
}

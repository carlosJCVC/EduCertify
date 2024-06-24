import { loadingAlert, notifyAlert } from "../../../utils/alerts";
import courseStore from "../../Infrastructure/store/course.store";
import { getCoursePreferencesFormValues } from "../../Presentation/utils/course-preferences-form.utils";

/**
 * Function to update course
 * @param int id 
 * @return Course course 
 */
export const updatePreference = async (id) => {
    try {
        const course = courseStore.getCourseSelected();
        const service = courseStore.getPreferenceService();
        const preferencesData = getCoursePreferencesFormValues();

        loadingAlert();

        await service.updateByCourseId(course.id, preferencesData);

        notifyAlert('Success!', 'Course Preferences has been updated successfully!', () => {
            location.reload();
        })

        return true;
    } catch (error) {
        throw error;
    }
}

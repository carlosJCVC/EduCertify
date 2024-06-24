import { loadingAlert, notifyAlert } from "../../../utils/alerts";
import courseStore from "../../Infrastructure/store/course.store";
import { getCoursePreferencesFormValues } from "../../Presentation/utils/course-preferences-form.utils";

/**
 * Function to update course
 * @param int id 
 * @return Course course 
 */
export const previewCourseCertificate = async (id) => {
    try {
        const course = courseStore.getCourseSelected();
        const service = courseStore.getCertificateService();
        const preferencesData = getCoursePreferencesFormValues();

        await service.downloadCertificate(course.id, preferencesData);

        return true;
    } catch (error) {
        throw error;
    }
}

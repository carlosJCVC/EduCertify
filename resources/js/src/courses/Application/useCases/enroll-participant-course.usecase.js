import { loadingAlert, notifyAlert, failAlert } from "../../../utils/alerts";
import CourseService from "../../Infrastructure/services/course.service";
import courseStore from "../../Infrastructure/store/course.store";
import { getEnrollParticipantFormValues } from "../../Presentation/utils/enroll-form-form.utils";
import { getEnrollParticipantToCourseModal } from "../../Presentation/utils/enroll-participant-modal.utils";

const courseService = new CourseService();

/**
 * Function to enroll course to participant 
 * @return bool 
*/
export const enrollParticipantCourse = async () => {
    
    try {
        const datatable = courseStore.getParticipantsEnrolledDatatable();
        const modal = getEnrollParticipantToCourseModal();
        const data = getEnrollParticipantFormValues();

        if (data.length < 1) {
            failAlert('Woops!', 'You need to selected courses to enroll!', () => location.reload())

            return;
        }

        const course = courseStore.getCourseSelected();

        loadingAlert();

        await courseService.enrollById(course.id, data);
        modal.hide();

        notifyAlert('Success!', 'Participant has been enrolled to course successfully!', () => {
            datatable.ajax.reload();
        })

        return true;
    } catch (error) {
        if (error.response) {
            const { response: { data } } = error;
            const title = "Woops!!"
            const { message } = data

            failAlert(title, message);
        }

        throw error;
    }
}

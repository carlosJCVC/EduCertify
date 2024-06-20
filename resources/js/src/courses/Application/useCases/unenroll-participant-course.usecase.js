import { loadingAlert, notifyAlert, failAlert, confirmAlert } from "../../../utils/alerts";
import courseStore from "../../Infrastructure/store/course.store";

/**
 * Function to unenroll course to participant 
 * @params {Number} courseid
 * @return Preomise<bool> 
*/
export const unenrollParticipantCourse = async (participantid) => {
    try {
        const datatable = courseStore.getParticipantsEnrolledDatatable();
        const course = courseStore.getCourseSelected();
        const service = courseStore.getCourseService();

        const title = "Confirm Unenrollment";
        const message = "Do you want to proceed with unenrolling to participant from this course?";
        confirmAlert(title, message, async ({ value }) => {
            if (!value) return;
            
            loadingAlert();
    
            await service.unenrollById(course.id, participantid);
    
            notifyAlert('Success!', 'Participant has been unenrolled from the course successfully!', () => {
                datatable.ajax.reload();
            })
        });

        return true;
    } catch (error) {
        throw error;
    }
}

import { loadingAlert, notifyAlert, failAlert, confirmAlert } from "../../../utils/alerts";
import participantStore from "../../Infrastructure/store/participant.store";

/**
 * Function to unenroll course to participant 
 * @params {Number} courseid
 * @return Preomise<bool> 
*/
export const unenrollCourseParticipant = async (courseid) => {    
    try {
        const datatable = participantStore.getCoursesEnrolledDatatable();
        const participant = participantStore.getParticipantSelected();
        const service = participantStore.getParticipantService();

        const title = "Confirm Unenrollment";
        const message = "Do you want to proceed with unenrolling to participant from this course?";
        confirmAlert(title, message, async ({ value }) => {
            if (!value) return;
            
            loadingAlert();
    
            await service.unenrollById(participant.id, courseid);
    
            notifyAlert('Success!', 'Participant has been unenrolled from the course successfully!', () => {
                datatable.ajax.reload();
            })
        });

        return true;
    } catch (error) {
        throw error;
    }
}

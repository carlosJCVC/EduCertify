import { loadingAlert, notifyAlert, failAlert } from "../../../utils/alerts";
import ParticipantService from "../../Infrastructure/services/participant.service";
import { getEnrollParticipantModal } from "../../Presentation/utils/enroll-course-modal.utils";
import { getEnrollCourseFormValues } from "../../Presentation/utils/enroll-form-form.utils";
import participantStore from "../../Infrastructure/store/participant.store";

const participantService = new ParticipantService();

/**
 * Function to enroll course to participant 
 * @return bool 
*/
export const enrollCourseParticipant = async () => {
    
    try {
        const datatable = participantStore.getCoursesEnrolledDatatable();
        const modal = getEnrollParticipantModal();
        const data = getEnrollCourseFormValues();

        if (data.length < 1) {
            failAlert('Woops!', 'You need to selected courses to enroll!', () => location.reload())

            return;
        }

        const participant = participantStore.getParticipantSelected();

        loadingAlert();

        await participantService.enrollById(participant.id, data);
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

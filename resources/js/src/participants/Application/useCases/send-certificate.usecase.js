import participantStore from "../../Infrastructure/store/participant.store";
import { confirmAlert, loadingAlert, notifyAlert } from "../../../utils/alerts";

export const sendCourseCertificate = (courseid) => {
    if (!courseid)
        throw new Error('Argument :id is required');

    try {
        const title = "Confirm Send Certificate";
        const message = "Are you sure you want to send the certificate of this course?";
        confirmAlert(title, message, async ({ value }) => {
            if (!value) return;

            loadingAlert();

            const service = participantStore.getParticipantService();
            const participant = participantStore.getParticipantSelected();
            await service.sendCertificateById(participant.id, courseid);

            notifyAlert("Success!", "Certificate has been successfully sent!");
        });

        return true;
    } catch (error) {
        throw error;
    }
}

/**
 * 
 * @returns {Booolean} true|false
 */
export const sendCoursesCertificates = () => {

    try {
        const title = "Confirm Send All Certificates";
        const message = "Are you sure you want to send the all certificates for this participant?";
        confirmAlert(title, message, async ({ value }) => {
            if (!value) return;

            loadingAlert();

            const service = participantStore.getParticipantService();
            const participant = participantStore.getParticipantSelected();
            await service.sendAllCertificatesById(participant.id);

            notifyAlert("Success!", "Certificate has been successfully sent!");
        });

        return true;
    } catch (error) {
        throw error;
    }
}
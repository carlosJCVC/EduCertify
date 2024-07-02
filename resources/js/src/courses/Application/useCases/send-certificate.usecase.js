import courseStore from "../../Infrastructure/store/course.store";
import { confirmAlert, loadingAlert, notifyAlert } from "../../../utils/alerts";

/**
 * 
 * @returns {Booolean} true|false
 */
export const sendParticipantsCertificates = () => {

    try {
        const title = "Confirm Send Certificate to All participants";
        const message = "Are you sure you want to send the certificate to all participants?";
        confirmAlert(title, message, async ({ value }) => {
            if (!value) return;

            loadingAlert();

            const service = courseStore.getCertificateService();
            const course = courseStore.getCourseSelected();
            await service.sendCertificateToAllParticipants(course.id);

            notifyAlert("Success!", "Certificates has been successfully sent to participants!");
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
export const sendCourseCertificate = (participantid) => {
    if (!participantid)
        throw new Error('Argument :id is required');

    try {
        const title = "Confirm Send Certificate";
        const message = "Are you sure you want to send the certificate of this Participant?";
        confirmAlert(title, message, async ({ value }) => {
            if (!value) return;

            loadingAlert();

            const service = courseStore.getCertificateService();
            const course = courseStore.getCourseSelected();

            await service.sendCertificateToParticipant(participantid, course.id);

            notifyAlert("Success!", "Certificate has been successfully sent!");
        });

        return true;
    } catch (error) {
        throw error;
    }
}
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

            const service = courseStore.getCourseService();
            const course = courseStore.getCourseSelected();
            await service.sendCertificateAllParticipants(course.id);

            notifyAlert("Success!", "Certificates has been successfully sent to participants!");
        });

        return true;
    } catch (error) {
        throw error;
    }
}
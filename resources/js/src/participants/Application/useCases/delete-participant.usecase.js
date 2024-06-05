import { confirmAlert, loadingAlert, notifyAlert } from "../../../utils/alerts";
import ParticipantService from "../../Infrastructure/services/participant.service";
import participantStore from "../../Infrastructure/store/participant.store";

const participantService = new ParticipantService();

/**
 * Function to delete a participant
 * @param {int} id
 * @return Promise<bool> 
 */
export const deleteParticipant = (id) => {
    if (!id)
        throw new Error('Argument :id is required');

    try {
        const title = "Confirm Participant Deletion";
        const message = "Are you sure you want to delete this participant? This action cannot be undone and the participant's data will be permanently removed from the system.";
        confirmAlert(title, message, async ({ value }) => {
            if (!value) return;

            loadingAlert();

            await participantService.deleteById(id);

            notifyAlert("Success!", "Participant record has been successfully deleted!");

            const datatable = participantStore.getParticipantDatatable();
            datatable.ajax.reload();
        });

        return true;
    } catch (error) {
        throw error;
    }
}
import { confirmAlert, loadingAlert, notifyAlert } from "../../../utils/alerts";
import speakerStore from "../../Infrastructure/store/speaker.store";

/**
 * Function to delete a speaker
 * @param {int} id
 * @return bool 
 */
export const deleteSpeaker = (id) => {
    if (!id)
        throw new Error('Argument :id is required');

    try {
        const title = "Confirm Speaker Deletion";
        const message = "Are you sure you want to delete this speaker? This action cannot be undone and the course's data will be permanently removed from the system.";
        confirmAlert(title, message, async ({ value }) => {
            if (!value) return;

            loadingAlert();

            const service = speakerStore.getSpeakerService();
            await service.deleteById(id);

            notifyAlert("Success!", "Speaker record has been successfully deleted!");

            const datatable = speakerStore.getSpeakerDatatable();
            datatable.ajax.reload();
        });

        return true;
    } catch (error) {
        throw error;
    }
}

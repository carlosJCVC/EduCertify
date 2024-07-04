import { confirmAlert, loadingAlert, notifyAlert } from "../../../utils/alerts";
import ParticipantService from "../../Infrastructure/services/participant.service";
import participantStore from "../../Infrastructure/store/participant.store";

const participantService = new ParticipantService();

/**
 * Function to delete a participant
 * @param {int} id
 * @return Promise<bool> 
 */
export const deletePhotoProfile = async () => {
    const participantSelected = participantStore.getParticipantSelected();

    if (!participantSelected.id)
        throw new Error('Argument :id is required');

    try {

        await participantService.deletePhotoToParticipantById(participantSelected.id);
        
        const datatable = participantStore.getParticipantDatatable();
        datatable.ajax.reload();

        return true;
    } catch (error) {
        throw error;
    }
}
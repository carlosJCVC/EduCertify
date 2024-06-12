import participantStore from '../../Infrastructure/store/participant.store';
import ParticipantService from "../../Infrastructure/services/participant.service";

const participantService = new ParticipantService();

/**
 * Function to get participant
 * @param {int} id
 * @return Participant participant 
 */
export const getParticipant = async (id) => {
    if (!id)
        throw new Error('Argument :id is required');

    try {
        const participant = await participantService.findById(id);
        participantStore.setParticipantSelected(participant);

        return participant;
    } catch (error) {
        throw error;
    }
}

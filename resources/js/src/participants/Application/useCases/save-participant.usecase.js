import participantStore from '../../Infrastructure/store/participant.store';
import { getParticipantFormValues } from '../../Presentation/utils/participant-form.utils';
import { createParticipant } from './create-participant.usecase';
import { updateParticipant } from './update-participant.usecase';

/**
 * Function to get participant
 * @param {int} id
 * @return void 
 */
export const saveParticipant = async () => {
    const participantSelected = participantStore.getParticipantSelected();
    const data = getParticipantFormValues();

    if (participantSelected) {
        await updateParticipant(participantSelected.id, data);

        participantStore.resetParticipantSelected()
    } else {
        await createParticipant(data);
    }
}

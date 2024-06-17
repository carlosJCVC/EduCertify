// import { updateParticipant } from './update-participant.usecase';

import speakerStore from "../../Infrastructure/store/speaker.store";
import { getSpeakerFormValues } from "../../Presentation/utils/speaker-form.utils";
import { createSpeaker } from "./create-speaker.usecase";
import { updateSpeaker } from "./update-speaker.usecase";

/**
 * Function to get speaker
 * @param {int} id
 * @return void 
 */
export const saveSpeaker = async () => {
    const speakerSelected = speakerStore.getSpeakerSelected();
    const data = getSpeakerFormValues();

    if (speakerSelected) {
        await updateSpeaker(speakerSelected.id, data);

        speakerStore.resetSpeakerSelected()
    } else {
        await createSpeaker(data);
    }
}

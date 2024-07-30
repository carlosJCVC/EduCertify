import { getParticipantDocumentValues } from "../../Presentation/utils/import-participant-form.utils";
import { resetDropifyFields } from "../../Presentation/utils/include-dropify-to-fields-utils";
import { createParticipant } from "./create-participant.usecase";

/**
 * Function to get participant
 * @param {int} id
 * @return void 
 */
export const importParticipant = async () => {
    resetDropifyFields()
    const data = getParticipantDocumentValues();
    await createParticipant(data);
}

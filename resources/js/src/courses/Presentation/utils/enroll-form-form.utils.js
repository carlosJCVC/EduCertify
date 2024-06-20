import { ElementSelectors } from "../../config/selectors";

/**
 * Return Form Values from enroll participant 
 * @returns Array participantss
 */
export const getEnrollParticipantFormValues = () => {
    const form = getEnrollParticipantForm();
    const formData = new FormData(form);

    const participantsSelected = JSON.parse(formData.get('participants') || "[]");
    const participants = participantsSelected.map(item => item.id);

    return participants;
}

/**
 * Funtion to get the enroll course form
 * @returns {HTML} form
 */
const getEnrollParticipantForm = () => {
    const form = document.querySelector(ElementSelectors.EnrollParticipantForm);

    return form;
}

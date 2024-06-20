
import participantStore from "../../../participants/Infrastructure/store/participant.store";
import { ElementSelectors } from "../../config/selectors";
import { getOrCreateParticipantsTagifyField } from "./include-tagify-to-fields.utils";

/**
 * Funtion to sow modal
 * @param {int} id 
 */
export const showEnrollParticipantToCourseModal= async () => {
    
    const modal = getEnrollParticipantToCourseModal();

    // resetFileField()
    modal._element.querySelector('.modal-title').textContent = `Enroll Participant to course`;

    const service = participantStore.getParticipantService();
    const participants = await  service.getAll();
    
    getOrCreateParticipantsTagifyField(participants);

    modal.show();
}


/**
 * Funtion to get a Modal
 * @returns {Modal}
 */
export const getEnrollParticipantToCourseModal = () => {
    
    const modalEl = document.querySelector(ElementSelectors.EnrollParticipantToCourseModal)
    const modal = bootstrap.Modal.getOrCreateInstance(modalEl)

    return modal;
}

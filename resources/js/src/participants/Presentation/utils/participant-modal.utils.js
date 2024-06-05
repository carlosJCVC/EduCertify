import { ElementSelectors } from "../../config/selectors";
import { getParticipant } from "../../Application/useCases/get-participant.usecase";
import { getParticipantFormValidation } from '../validators/participant-validator';
import { setParticipantFormValues } from './participant-form.utils';
import { includeConfigToFields } from "./include-config-to-fields-utils";

/**
 * Funtion to sow modal
 * @param {int} id 
 */
export const showCreateParticipantModal = () => {
    const modal = getParticipantModal();

    // resetFileField()
    modal._element.querySelector('.modal-title').textContent = `Create New Participant`;
    getParticipantFormValidation()

    includeConfigToFields()

    modal.show();
}

/**
 * Funtion to sow modal
 * @param {int} id 
 */
export const showEditParticipantModal = async (id) => {
    if (!id)
        throw new Error('Argument :id is required');

    const modal = getParticipantModal();
    const participant = await getParticipant(id);

    modal._element.querySelector('.modal-title').textContent = `Edit Participant: ${participant.firstName}`;

    setParticipantFormValues(participant);
    getParticipantFormValidation()
    includeConfigToFields()

    modal.show();
}

/**
 * Funtion to get a Modal
 * @returns {Modal}
 */
export const getParticipantModal = () => {
    const modalEl = document.querySelector(ElementSelectors.ParticipantModal)
    const modal = bootstrap.Modal.getOrCreateInstance(modalEl)

    return modal;
}

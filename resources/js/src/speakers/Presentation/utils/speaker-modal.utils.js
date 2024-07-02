import { getSpeaker } from "../../Apllication/useCases/get-speaker.usecase";
import { ElementSelectors } from "../../config/selectors";
import { getSpeakerFormValidation } from "../validators/speaker-validator";
import { includeConfigToFields } from "./include-config-to-fields-utils";
import { setSpekaerFormValues } from "./speaker-form.utils";
// import { getSpeaker } from "../../Application/useCases/get-speaker.usecase";
// import { setSpeakerFormValues } from './speaker-form.utils';

/**
 * Funtion to sow modal
 * @param {int} id 
 */
export const showCreateSpeakerModal = () => {
    const modal = getSpeakerModal();

    // resetFileField()
    modal._element.querySelector('.modal-title').textContent = `Create New Speaker`;
    getSpeakerFormValidation()

    includeConfigToFields()

    modal.show();
}

/**
 * Funtion to sow modal
 * @param {int} id 
 */
export const showEditSpeakerModal = async (id) => {
    if (!id)
        throw new Error('Argument :id is required');

    const modal = getSpeakerModal();
    const speaker = await getSpeaker(id);

    modal._element.querySelector('.modal-title').textContent = `Edit Speaker: ${speaker.firstName}`;

    setSpekaerFormValues(speaker);
    getSpeakerFormValidation();
    includeConfigToFields();

    modal.show();
}

/**
 * Funtion to get a Modal
 * @returns {Modal}
 */
export const getSpeakerModal = () => {
    const modalEl = document.querySelector(ElementSelectors.SpeakerModal)
    const modal = bootstrap.Modal.getOrCreateInstance(modalEl)

    return modal;
}

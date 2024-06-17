import $ from 'jquery';
import { ElementSelectors } from "../../config/selectors";
import { getParticipantFormValidation } from "../validators/participant-validator";
import { resetDropifyFields, setFileField } from './include-dropify-to-fields-utils';
import { resetBirthdateField } from './include-flatpick-to-fields-utils';

/**
 * Return Form Values from participant 
 * @returns FormData formData
 */
export const getParticipantFormValues = () => {
    const form = getParticipantForm();
    const formData = new FormData(form);

    return formData;
}

/**
 * Functionto set values in form
 * @param {Participant} participant 
 */
export const setParticipantFormValues = (participant) => {
    const form = getParticipantForm();

    form.querySelector('[name="firstName"]').value = participant.firstName;
    form.querySelector('[name="lastName"]').value = participant.lastName;
    form.querySelector('[name="birthdate"]').value = participant.birthdate;
    form.querySelector('[name="email"]').value = participant.email;
    form.querySelector('[name="status"]').value = participant.status;

    setFileField(participant.avatar);
}

/**
 * Functionto reset values in form
 */
export const resetParticipantFormValues = () => {
    const form = getParticipantForm();
    const fv = getParticipantFormValidation();
    fv.resetForm(true);
    form.reset();

    resetDropifyFields()
    resetBirthdateField();
}

/**
 * Funtion to get the participant form
 * @returns {HTML} form
 */
const getParticipantForm = () => {
    const form = document.querySelector(ElementSelectors.ParticipantForm);

    return form;
}

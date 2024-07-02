import { ElementSelectors } from "../../config/selectors";
import { resetDropifyFields, setFileField } from './include-dropify-to-fields-utils';
import { getSpeakerFormValidation } from '../validators/speaker-validator';
import { getOrCreateExpertisesTagifyField } from './include-tagify-to-fields-utils';

/**
 * Return Form Values from speaker 
 * @returns FormData formData
 */
export const getSpeakerFormValues = () => {
    const form = getSpeakerForm();
    const formData = new FormData(form);

    return formData;
}

/**
 * Function to set values in form
 * @param {Speaker} speaker 
 */
export const setSpekaerFormValues = (speaker) => {
    const form = getSpeakerForm();
    const expertiseField = getOrCreateExpertisesTagifyField([])

    form.querySelector('[name="firstName"]').value = speaker.firstName;
    form.querySelector('[name="lastName"]').value = speaker.lastName;
    form.querySelector('[name="email"]').value = speaker.email;
    form.querySelector('[name="status"]').value = speaker.status;
    form.querySelector('[name="phoneNumber"]').value = speaker.phoneNumber;
    form.querySelector('[name="linkedinProfile"]').value = speaker.linkedinProfile;
    form.querySelector('[name="website"]').value = speaker.website;
    form.querySelector('[name="biography"]').value = speaker.biography;
    form.querySelector('[name="notes"]').value = speaker.notes;

    expertiseField.addTags(speaker.expertises);
    setFileField(speaker.avatar);
}

/**
 * Functionto reset values in form
 */
export const resetSpeakerFormValues = () => {
    const form = getSpeakerForm();
    const fv = getSpeakerFormValidation();
    fv.resetForm(true);
    form.reset();

    resetDropifyFields()
}

/**
 * Funtion to get the participant form
 * @returns {HTML} form
 */
const getSpeakerForm = () => {
    const form = document.querySelector(ElementSelectors.SpeakerForm);
    return form;
}

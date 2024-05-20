import { ElementSelectors } from "../../config/selectors";
import { getUserFormValidation } from "../validators/user-validator";

/**
 * Return Form Values from user 
 * @returns FormData formData
 */
export const getUserFormValues = () => {
    const form = getUserForm();
    const formData = new FormData(form);

    return formData;
}

/**
 * Functionto set values in form
 * @param {User} user 
 */
export const setUserFormValues = (user) => {
    const form = getUserForm();

    form.querySelector('[name="name"]').value = user.name;
    form.querySelector('[name="email"]').value = user.email;
    form.querySelector('[name="status"]').value = user.status;
}

/**
 * Functionto reset values in form
 */
export const resetUserFormValues = () => {
    const form = getUserForm();
    const fv = getUserFormValidation();
    fv.resetForm(true);
    form.reset();
}

/**
 * Funtion to get the user form
 * @returns {HTML} form
 */
const getUserForm = () => {
    const form = document.querySelector(ElementSelectors.UserForm);

    return form;
}
import { ElementSelectors } from "../../config/selectors";
import { getUserFormValidation } from "../validators/user-validator";
import { resetDropifyFields, setFileField } from "./include-dropify-to-fields-utils";

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

    form.querySelector('[name="firstName"]').value = user.firstName;
    form.querySelector('[name="lastName"]').value = user.lastName;
    form.querySelector('[name="email"]').value = user.email;
    form.querySelector('[name="status"]').value = user.status;

    setFileField(user.avatar);
}

/**
 * Functionto reset values in form
 */
export const resetUserFormValues = () => {
    const form = getUserForm();
    const fv = getUserFormValidation();
    fv.resetForm(true);
    form.reset();

    resetDropifyFields()
}

/**
 * Funtion to get the user form
 * @returns {HTML} form
 */
const getUserForm = () => {
    const form = document.querySelector(ElementSelectors.UserForm);

    return form;
}

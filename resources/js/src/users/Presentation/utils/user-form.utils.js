import { ElementSelectors } from "../../config/selectors";
import { getUserFormValidation } from "../validators/user-validator";
import $ from 'jquery';

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
}

/**
 * Funtion to get the user form
 * @returns {HTML} form
 */
const getUserForm = () => {
    const form = document.querySelector(ElementSelectors.UserForm);

    return form;
}

/**
 * FUnction to set avatar in user form
 *
 * @param {string} path
 */
const setFileField = (path = null) => {
    let avatar = $('#avatar').dropify({
        defaultFile: path,
        messages: {
            default: '<h4>Drag and drop your avatar here or click.</h4>',
            replace: 'Drag and drop or click to replace',
            remove: 'Remove',
            error: 'Ooops, something wrong happended.'
        },
    });

    avatar = avatar.data('dropify');
    avatar.resetPreview();
    avatar.clearElement();
    avatar.settings.defaultFile = path;
    avatar.destroy();
    avatar.init();
};

/**
 * Function to reset avatar in user form
 *
 * @param {string} path
 */
export const resetFileField = () => {
    let avatar = $('#avatar').dropify({
        defaultFile: null,
        messages: {
            default: '<h4>Drag and drop your avatar here or click.</h4>',
            replace: 'Drag and drop or click to replace',
            remove: 'Remove',
            error: 'Ooops, something wrong happended.'
        },
    });

    avatar = avatar.data('dropify');
    avatar.resetPreview();
    avatar.clearElement();
    avatar.settings.defaultFile = '';
    avatar.destroy();
    avatar.init();
};
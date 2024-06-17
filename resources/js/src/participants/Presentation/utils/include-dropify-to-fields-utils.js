import $ from 'jquery';
import 'dropify/dist/js/dropify.min';

let avatarDropify;

/**
 * include dropify libe in participant fields
 */
export const includeDropifyToFields = () => {
    getOrCreateAvatarDropifyField();
}

/**
 * Get or create dropify intance
 * @returns Dropify
 */
export const getOrCreateAvatarDropifyField = () => {
    if (avatarDropify) {
        return avatarDropify;
    }

    const avatarSelector = "#avatar";
    avatarDropify = $(avatarSelector).dropify({
        messages: getDropifyMessages(),
    });

    return avatarDropify;
}

/**
 * Function to set avatar in user form
 * @param {string} path
 */
export const setFileField = (path) => {
    const avatarField = getOrCreateAvatarDropifyField();
    const avatar = avatarField.data('dropify');
    avatar.resetPreview();
    avatar.setPreview(true, path);
};

/**
 * Function to reset avatar in participant form
 *
 * @param {string} path
 */
export const resetDropifyFields = () => {
    const avatarField = getOrCreateAvatarDropifyField();

    const avatar = avatarField.data('dropify');
    avatar.resetPreview();
};

/**
 * Get dropify messages
 * @returns object
 */
const getDropifyMessages = () => {
    return {
        default: '<h4>Drag and drop your avatar here or click.</h4>',
        replace: 'Drag and drop or click to replace',
        remove: 'Remove',
        error: 'Ooops, something wrong happended.'
    };
}

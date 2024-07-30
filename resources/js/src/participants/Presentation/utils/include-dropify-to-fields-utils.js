import $ from 'jquery';
import 'dropify/dist/js/dropify.min';
import '../assets/css/custom-dropify-styles.scss'

let avatarDropify;
let fileDropify;

/**
 * include dropify libe in participant fields
 */
export const includeDropifyToFields = () => {
    getOrCreateAvatarDropifyField();
    getFileDropifyField();
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
 * Get or create dropify intance
 * @returns Dropify
 */
export const getFileDropifyField = () => {
    if (fileDropify) {
        return fileDropify;
    }

    const avatarSelector = "#fileInput";
    fileDropify = $(avatarSelector).dropify({
        messages: getDropifyMessagesFile(),
    });

    return fileDropify;
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
    const fileField = getFileDropifyField();

    const avatar = avatarField.data('dropify');
    avatar.resetPreview();

    const file = fileField.data('dropify');
    file.resetPreview();
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

/**
 * Get dropify messages
 * @returns object
 */
const getDropifyMessagesFile = () => {
    return {
        default: '<h4>Drag and drop your File here or click.</h4>',
        replace: 'Drag and drop or click to replace',
        remove: 'Remove',
        error: 'Ooops, something wrong happended.'
    };
}
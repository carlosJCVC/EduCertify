import $ from 'jquery';
import 'dropify/dist/js/dropify.min';

let backgroundImageDropify;

/**
 * include dropify libe in participant fields
 */
export const includeDropifyToFields = () => {
    getOrCreateBackgroundImageDropifyField()
}

/**
 * Get or create dropify intance
 * @returns Dropify
 */
export const getOrCreateBackgroundImageDropifyField = () => {
    if (backgroundImageDropify) {
        return backgroundImageDropify;
    }

    const bgImageSelector = "#background-image";
    const messages = getDropifyMessages();
    messages.default = '<h4>Drag and drop your <b>Background Image<b> here or click.</h4>',
    backgroundImageDropify = $(bgImageSelector).dropify({
        messages: messages,
    });

    return backgroundImageDropify;
}

/**
 * Function to set avatar in user form
 * @param {string} path
 */
export const setBgImageField = (path) => {
    const bgImageField = getOrCreateBackgroundImageDropifyField();
    const bgimage = bgImageField.data('dropify');
    bgimage.resetPreview();
    bgimage.setPreview(true, path);
};

/**
 * Function to reset bgimage in participant form
 *
 * @param {string} path
 */
export const resetDropifyFields = () => {
    const bgImageField = getOrCreateBackgroundImageDropifyField();
    const bgimage = bgImageField.data('dropify');
    bgimage.resetPreview();
};

/**
 * Get dropify messages
 * @returns object
 */
const getDropifyMessages = () => {
    return {
        default: '<h4>Drag and drop your <b>Background Image<b> here or click.</h4>',
        replace: 'Drag and drop or click to replace',
        remove: 'Remove',
        error: 'Ooops, something wrong happended.'
    };
}

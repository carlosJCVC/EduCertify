import $ from 'jquery';
import 'dropify/dist/js/dropify.min';

let backgroundImageDropify;
let logoImageDropify;

/**
 * include dropify libe in participant fields
 */
export const includeDropifyToFields = () => {
    getOrCreateBackgroundImageDropifyField()
    getOrCreateLogoImageDropifyField()
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
 * Get or create dropify intance
 * @returns Dropify
 */
export const getOrCreateLogoImageDropifyField = () => {
    if (logoImageDropify) {
        return logoImageDropify;
    }

    const logoImageSelector = "#logo-image";
    const messages = getDropifyMessages();
    messages.default = '<h4>Drag and drop your <b>Logo Image<b> here or click.</h4>',
    logoImageDropify = $(logoImageSelector).dropify({
        messages: messages,
    });

    return logoImageDropify;
}

/**
 * Function to set background in settings form
 * @param {string} path
 */
export const setBgImageField = (path) => {
    const bgImageField = getOrCreateBackgroundImageDropifyField();
    const bgimage = bgImageField.data('dropify');
    bgimage.resetPreview();
    bgimage.setPreview(true, path);
};

/**
 * Function to set logo in settings form
 * @param {string} path
 */
export const setLogoImageField = (path) => {
    const logoImageField = getOrCreateLogoImageDropifyField();
    const logoimage = logoImageField.data('dropify');
    logoimage.resetPreview();
    logoimage.setPreview(true, path);
};

/**
 * Function to reset dropify images
 * @param {string} path
 */
export const resetDropifyFields = () => {
    const bgImageField = getOrCreateBackgroundImageDropifyField();
    const bgimage = bgImageField.data('dropify');
    bgimage.resetPreview();

    const logoImageField = getOrCreateLogoImageDropifyField();
    const logoimage = logoImageField.data('dropify');
    logoimage.resetPreview();
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

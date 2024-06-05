import $ from 'jquery';
import 'dropify/dist/js/dropify.min';

/**
 * include dropify libe in participant fields
 */
export const includeDropifyToFields = () => {
    const avatarSelector = "#avatar";

    $(avatarSelector).dropify({
        messages: getDropifyMessages(),
    });
}

/**
 * Function to reset avatar in participant form
 *
 * @param {string} path
 */
export const resetDropifyFields = () => {
    const avatarSelector = "#avatar";

    let avatar = $(avatarSelector).dropify({
        defaultFile: null,
        messages: getDropifyMessages(),
    });

    avatar = avatar.data('dropify');
    avatar.resetPreview();
    avatar.clearElement();
    avatar.settings.defaultFile = '';
    avatar.destroy();
    avatar.init();
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

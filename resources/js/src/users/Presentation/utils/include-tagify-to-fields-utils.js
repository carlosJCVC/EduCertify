import Tagify from '@yaireo/tagify'
import '@yaireo/tagify/dist/tagify.css'
import '/resources/assets/vendor/libs/tagify/tagify.scss'
import '/resources/sass/custom-tagify-styles.scss'

let statusTagify;

/**
 * include select2 in participant fields
 */
export const includeTagifyToFields = async () => {
    getOrCreateStatusTagifyField()
}

/**
 * Include or generate tagify field to level input 
 * @returns Tagify
 */
export const getOrCreateStatusTagifyField = () => {
    if (statusTagify) {
        return statusTagify;
    }

    const statusElement = document.querySelector('.tagify-status');
    statusTagify = new Tagify(statusElement, {
        id: 'statusTagify',
        enforceWhitelist: true,
        keepInvalidTags: true,
        mode: "select",
        value: "Active",
        whitelist: ["Active", "Inactive"],
        backspace: true,
        placeholder: 'Please select status',
        dropdown: {
            closeOnSelect: true
        }
    });

    return statusTagify;
}

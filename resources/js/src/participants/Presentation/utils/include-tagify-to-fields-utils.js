import Tagify from '@yaireo/tagify'
import '@yaireo/tagify/dist/tagify.css' 
import '/resources/assets/vendor/libs/tagify/tagify.scss' 

let tagify;
/**
 * include select2 in participant fields
 */
export const includeTagifyToFields = () => {
    const statusElement = document.querySelector('.tagify-status'); 

    if (tagify) {
        return tagify;        
    }

    tagify = new Tagify(statusElement, {
        id: 'test1',
        enforceWhitelist: true,
        keepInvalidTags: true,
        mode: "select",
        value: "Active",
        whitelist: ["Active", "Inactive"],
        blacklist: ['foo', 'bar'],
        backspace: true,
        placeholder: 'Please select status',
        dropdown: {
            closeOnSelect: true
        }
    });

    // tagify.destroy()
}
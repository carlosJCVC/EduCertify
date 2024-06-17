import Tagify from '@yaireo/tagify'
import '@yaireo/tagify/dist/tagify.css'
import '/resources/assets/vendor/libs/tagify/tagify.scss'
import '/resources/sass/custom-tagify-styles.scss'
import speakerStore from '../../Infrastructure/store/speaker.store';

let statusTagify;
let expertisesTagify;
/**
 * include select2 in participant fields
 */
export const includeTagifyToFields = async () => {
    const service = speakerStore.getExpertiseService();
    const experties = await service.getAll();

    getOrCreateStatusTagifyField();
    getOrCreateExpertisesTagifyField(experties);
}

/**
 * Include or generate tagify field to level input 
 * @returns statusTagify
 */
export const getOrCreateStatusTagifyField = () => {
    if (statusTagify) {
        return statusTagify;
    }

    const statusElement = document.querySelector('.tagify-status');
    statusTagify = new Tagify(statusElement, {
        id: 'speaker-status',
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

/**
 * Include or generate tagify field to level input 
 * @returns statusTagify
 */
export const getOrCreateExpertisesTagifyField = (experties) => {
    // const whitelist = [];

    if (expertisesTagify) {
        expertisesTagify.removeAllTags();

        if (!!experties.length) {
            expertisesTagify.whitelist = null;
            expertisesTagify.whitelist = [...experties];

        }

        return expertisesTagify;
    }

    const expertiesElement = document.querySelector('.tagify-expertise');
    expertisesTagify = new Tagify(expertiesElement, {
        id: 'expertiseTagify',
        whitelist: experties,
        placeholder: 'Please write...',
        dropdown: {
            maxItems: 20,
            classname: 'tags-look',
            enabled: 0,
            closeOnSelect: true
        }
    });

    expertisesTagify.removeAllTags();

    return expertisesTagify;
}
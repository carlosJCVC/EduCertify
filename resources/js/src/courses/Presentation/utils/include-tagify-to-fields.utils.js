import Tagify from '@yaireo/tagify'
import courseStore from '../../Infrastructure/store/course.store';
import '../assets/css/custom-single-tagify-styles.scss'
import '../assets/css/custom-multi-tagify-styles.scss'

let speakerTagify;
let levelTagify;
let categoryTagify;
let participantsTagify;

/**
 * include select2 in participant fields
 */
export const includeTagifyToFields = async () => {
    const categoryService = courseStore.getCategoryService();
    const categories = await categoryService.getAll();

    getOrCreateLevelTagifyField()
    getOrCreateCategoryTagifyField(categories)
}

/**
 * Include or generate tagify field to level input 
 * @returns Tagify
 */
export const getOrCreateLevelTagifyField = () => {
    if (levelTagify) {
        return levelTagify;
    }

    const levelElement = document.querySelector('.tagify-level');
    levelTagify = new Tagify(levelElement, {
        id: 'level-tagify',
        enforceWhitelist: true,
        keepInvalidTags: false,
        mode: "select",
        // value: "Beginner",
        whitelist: ["Beginner", "Intermediate", "Advanced"],
        backspace: true,
        placeholder: 'Please select level',
        dropdown: {
            classname: 'single-tags-look',
            closeOnSelect: true
        }
    });

    return levelTagify;
}

/**
 * Include or generate tagify field to level input
 * @param {Array} categories 
 * @returns Tagify
 */
export const getOrCreateCategoryTagifyField = (categories) => {
    if (categoryTagify) {
        categoryTagify.removeAllTags();

        if (!!categories.length) {
            categoryTagify.whitelist = null;
            categoryTagify.whitelist = [...categories];
        }

        return categoryTagify;
    }

    const categoryElement = document.querySelector('.tagify-category');
    categoryTagify = new Tagify(categoryElement, {
        id: 'category-tagify',
        value: '',
        whitelist: [...categories],
        placeholder: 'Please write...',
        dropdown: {
            maxItems: 20,
            classname: 'multi-tags-look',
            enabled: 0,
            closeOnSelect: true
        }
    });

    categoryTagify.removeAllTags();

    return categoryTagify;
}

/**
 * Include or generate tagify field to level input 
 * @returns statusTagify
 */
export const getOrCreateParticipantsTagifyField = (participants) => {
    const whitelist = participants.map(participant => ({ id: participant.id, 'value': `${participant.lastName} ${participant.firstName}` }));

    if (participantsTagify) {
        participantsTagify.removeAllTags();

        if (!!participants.length) {
            participantsTagify.whitelist = null;
            participantsTagify.whitelist = [...whitelist];

        }

        return participantsTagify;
    }

    const courseElement = document.querySelector('.tagify-participants');
    participantsTagify = new Tagify(courseElement, {
        id: 'participants-tagify',
        value: '',
        whitelist: [...whitelist],
        placeholder: 'Please write...',
        dropdown: {
            maxItems: 20,
            classname: 'multi-tags-look',
            enabled: 0,
            closeOnSelect: true
        }
    });

    participantsTagify.removeAllTags();

    return participantsTagify;
}

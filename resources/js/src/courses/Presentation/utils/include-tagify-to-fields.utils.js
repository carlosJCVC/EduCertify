import Tagify from '@yaireo/tagify'
import '@yaireo/tagify/dist/tagify.css'
import '/resources/assets/vendor/libs/tagify/tagify.scss'
import '/resources/sass/custom-tagify-styles.scss'
import courseStore from '../../Infrastructure/store/course.store';
import speakerStore from '../../../speakers/Infrastructure/store/speaker.store';

let speakerTagify;
let levelTagify;
let categoryTagify;

/**
 * include select2 in participant fields
 */
export const includeTagifyToFields = async () => {
    const courseService = courseStore.getCategoryService();
    const categories = await courseService.getAll();

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
        whitelist: categories,
        placeholder: 'Please write...',
        dropdown: {
            maxItems: 20,
            classname: 'category-tags-look',
            enabled: 0,
            closeOnSelect: true
        }
    });

    categoryTagify.removeAllTags();

    return categoryTagify;
}


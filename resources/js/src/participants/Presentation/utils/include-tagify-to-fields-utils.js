import Tagify from '@yaireo/tagify'
import '@yaireo/tagify/dist/tagify.css'
import '/resources/assets/vendor/libs/tagify/tagify.scss'
import '/resources/sass/custom-tagify-styles.scss'
import courseStore from '../../../courses/Infrastructure/store/course.store';
import { forEach } from 'jszip';

let statusTagify;
let coursesTagify;
/**
 * include select2 in participant fields
 */
export const includeTagifyToFields = () => {
    getOrCreateStatusTagifyField();
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

    return statusTagify;
}

/**
 * Include or generate tagify field to level input 
 * @returns statusTagify
 */
export const getOrCreateCoursesTagifyField = (courses) => {
    // const whitelist = [];
    const whitelist = courses.map(course => ({ id: course.id, 'value': course.name }));

    if (coursesTagify) {
        coursesTagify.removeAllTags();

        if (!!courses.length) {
            coursesTagify.whitelist = null;
            coursesTagify.whitelist = [...whitelist];

        }

        return coursesTagify;
    }

    const courseElement = document.querySelector('.tagify-courses');
    coursesTagify = new Tagify(courseElement, {
        id: 'coursesTagify',
        value: '',
        whitelist: [...whitelist],
        placeholder: 'Please write...',
        dropdown: {
            maxItems: 20,
            classname: 'tags-look',
            enabled: 0,
            closeOnSelect: true
        }
    });

    coursesTagify.removeAllTags();

    return coursesTagify;
}
import { ElementSelectors } from "../../config/selectors";

/**
 * Return Form Values from enroll course 
 * @returns Array courses
 */
export const getEnrollCourseFormValues = () => {
    const form = getEnrollCourseForm();
    const formData = new FormData(form);

    const coursesSelected = JSON.parse(formData.get('courses') || "[]");
    const courses = coursesSelected.map(item => item.id);

    return courses;
}

/**
 * Funtion to get the enroll course form
 * @returns {HTML} form
 */
const getEnrollCourseForm = () => {
    const form = document.querySelector(ElementSelectors.EnrollCourseForm);

    return form;
}

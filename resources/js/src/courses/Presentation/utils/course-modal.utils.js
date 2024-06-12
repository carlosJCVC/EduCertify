import { ElementSelectors } from "../../config/selectors";
import { includeConfigToFields } from "./include-config-to-fields-utils";
import { getCourseFormValidation } from "../validators/course-validator";
import { getCourse } from "../../Application/useCases/get-course.usecase";
import { setCourseFormValues } from "./course-form.utils";

/**
 * Funtion to sow modal
 * @param {int} id 
 */
export const showCreateCourseModal = () => {
    const modal = getCourseModal();

    // resetFileField()
    modal._element.querySelector('.modal-title').textContent = `Create New Course`;

    getCourseFormValidation()
    includeConfigToFields()

    modal.show();
}

/**
 * Funtion to sow modal
 * @param {int} id 
 */
export const showEditCourseModal = async (id) => {
    if (!id)
        throw new Error('Argument :id is required');

    const modal = getCourseModal();
    const course = await getCourse(id);

    modal._element.querySelector('.modal-title').textContent = `Edit Course: ${course.name}`;

    await includeConfigToFields()
    setCourseFormValues(course);
    getCourseFormValidation()

    modal.show();
}

/**
 * Funtion to get a Modal
 * @returns {Modal}
 */
export const getCourseModal = () => {
    const modalEl = document.querySelector(ElementSelectors.CourseModal)
    const modal = bootstrap.Modal.getOrCreateInstance(modalEl)

    return modal;
}

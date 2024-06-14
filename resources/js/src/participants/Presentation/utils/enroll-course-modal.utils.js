import courseStore from "../../../courses/Infrastructure/store/course.store";
import { ElementSelectors } from "../../config/selectors";
import { getOrCreateCoursesTagifyField } from "./include-tagify-to-fields-utils";

/**
 * Funtion to sow modal
 * @param {int} id 
 */
export const showEnrollParticipantModal = async () => {
    const modal = getEnrollParticipantModal();
    
    // resetFileField()
    modal._element.querySelector('.modal-title').textContent = `Enroll Participant`;

    const service = courseStore.getCourseService();
    const courses = await  service.getAll();
    
    getOrCreateCoursesTagifyField(courses);

    modal.show();
}


/**
 * Funtion to get a Modal
 * @returns {Modal}
 */
export const getEnrollParticipantModal = () => {
    const modalEl = document.querySelector(ElementSelectors.EnrollParticipantModal)
    const modal = bootstrap.Modal.getOrCreateInstance(modalEl)

    return modal;
}

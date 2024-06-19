import $ from 'jquery';
import { ElementSelectors } from "../../config/selectors";
import { getCourseFormValidation } from "../validators/course-validator";
import { getOrCreateEndFlatpickrField, getOrCreateStartFlatpickrField } from "./include-flatpick-to-fields.utils";
import { getOrCreateSpeakerSelect2Field } from "./include-select2-to-fields.utils";
import { getOrCreateCategoryTagifyField } from "./include-tagify-to-fields.utils";

/**
 * Return Form Values from Course 
 * @returns FormData formData
 */
export const getCourseFormValues = () => {
    const form = getCourseForm();
    const formData = new FormData(form);

    return formData;
}

/**
 * Function to set values in form
 * @param {Course} course 
 */
export const setCourseFormValues = (course) => {
    const form = getCourseForm();
    const categoryField = getOrCreateCategoryTagifyField([])
    const startDateField = getOrCreateStartFlatpickrField()
    const endDateField = getOrCreateEndFlatpickrField()
    const speakerField = getOrCreateSpeakerSelect2Field()

    form.querySelector('[name="name"]').value = course.name;
    // form.querySelector('[name="speaker"]').value = course.speaker;
    form.querySelector('[name="level"]').value = course.level;
    form.querySelector('[name="description"]').value = course.description;

    categoryField.addTags(course.categories);
    startDateField.setDate(course.startDate);
    endDateField.setDate(course.endDate);

    const data = { id: course.speaker.id, text: `${course.speaker.lastName} ${course.speaker.firstName}` };
    const newOption = new Option(data.text, data.id, false, true);
    $('#speaker-select2').append(newOption).trigger('change');
}

/**
 * Functionto reset values in form
 */
export const resetCourseFormValues = () => {
    const form = getCourseForm();
    const fv = getCourseFormValidation();
    fv.resetForm(true);
    form.reset();

    $('#speaker-select2').val('');
    $('#speaker-select2').trigger('change');
}

/**
 * Funtion to get the course form
 * @returns {HTML} form
 */
const getCourseForm = () => {
    const form = document.querySelector(ElementSelectors.CourseForm);
    return form;
}


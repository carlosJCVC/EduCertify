import flatpickr from "flatpickr";
// import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/airbnb.css'
import { getCourseFormValidation } from "../validators/course-validator";

let startDateFlatpickr;
let endDateFlatpickr;

/**
 * include flatpick to participant field 
*/
export const includeFlatpickToFields = () => {
    getOrCreateStartFlatpickrField()
    getOrCreateEndFlatpickrField()
}

/**
 * Include or generate flatpickr field to start date input 
 * @returns flatpickr
 */
export const getOrCreateStartFlatpickrField = () => {
    
    if (startDateFlatpickr) {
        startDateFlatpickr.setDate(new Date());

        return startDateFlatpickr;
    }

    const fv = getCourseFormValidation();
    const startDateElement = document.querySelector("#floatingInputStartDate");
    startDateFlatpickr = flatpickr(startDateElement, {
        enableTime: true,
        altInput: true,
        altFormat: "m/d/Y h:i K",
        dateFormat: "Y-m-d H:i",
        time_24hr: false,
        showAlways: false,
        altInputClass: 'form-control',
        onChange: function() {
            fv.revalidateField('startDate');
        },
    });

    startDateFlatpickr.setDate(new Date());

    return startDateFlatpickr;
}

/**
 * Include or generate flatpickr field to end date input 
 * @returns flatpickr
 */
export const getOrCreateEndFlatpickrField = () => {
    
    if (endDateFlatpickr) {
        endDateFlatpickr.setDate(new Date());

        return endDateFlatpickr;
    }

    const fv = getCourseFormValidation();
    const endDateElement = document.querySelector("#floatingInputEndDate");
    endDateFlatpickr = flatpickr(endDateElement, {
        enableTime: true,
        altInput: true,
        altFormat: "m/d/Y h:i K",
        dateFormat: "Y-m-d H:i",
        time_24hr: false,
        onChange: function() {
            fv.revalidateField('startDate');
        },
    });

    endDateFlatpickr.setDate(new Date());

    return endDateFlatpickr;
}

/**
 * Function to reset avatar in participant form
 *
 * @param {string} path
 */
export const resetDateField = () => {
    const startDateElement = document.querySelector("#floatingInputStartDate");
    const endDateElement = document.querySelector("#floatingInputEndDate");

    startDateElement.value = ""
    endDateElement.value = ""

    flatpickr(startDateElement, endDateElement).clear()
};
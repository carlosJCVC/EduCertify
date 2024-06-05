import flatpickr from "flatpickr";


/**
 * include flatpick to participant field 
*/
export const includeFlatpickToFields = () => {
    const birthdateDateElement = document.querySelector("#floatingInputBirthdate");

    flatpickr(birthdateDateElement, {
        altInput: true,
        altFormat: "F j, Y",
        dateFormat: "Y-m-d",
    });
}

/**
 * Function to reset avatar in participant form
 *
 * @param {string} path
 */
export const resetBirthdateField = () => {
    const birthdateDateElement = document.querySelector("#floatingInputBirthdate");
    birthdateDateElement.value = ""

    flatpickr(birthdateDateElement).clear()
};
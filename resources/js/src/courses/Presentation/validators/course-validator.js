import { ElementSelectors } from "../../config/selectors";

let fv = null;

/**
 * Function to create form validation
 * @returns {FormValidation} fv
 */
export const getCourseFormValidation = () => {
    if (!fv) {
        const $elemFv = document.querySelector(ElementSelectors.CourseForm);
        const VALID_CLASS = 'is-valid';
        const INVALID_CLASS = 'is-invalid';

        fv = FormValidation.formValidation($elemFv, {
            fields: buildFormFieldsRules(),
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                bootstrap5: new FormValidation.plugins.Bootstrap5({
                    eleValidClass: VALID_CLASS,
                    eleInvalidClass: INVALID_CLASS,
                    rowSelector: '.form-floating-custom'
                }),
                // defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
                autoFocus: new FormValidation.plugins.AutoFocus(),
            },
            init: instance => {
                instance.on('plugins.message.placed', function (e) {
                    if (e.element.parentElement.classList.contains('input-group')) {
                        e.element.parentElement.insertAdjacentElement('afterend', e.messageElement);
                    }
                });
            }
        });

        fv.on('core.field.invalid', function(fieldName) {
            if (fieldName == 'speaker') {
                const field = document.querySelector(`[name="${fieldName}"]`);
                if (field.classList.contains(INVALID_CLASS)) {
                    const parent = field.closest(".form-floating-custom");
                    const inputs = parent.getElementsByTagName('span');

                    for (let index = 0; index < inputs.length; index++) {
                        const element = inputs[index];
                        element.classList.remove(VALID_CLASS)
                        element.classList.add(INVALID_CLASS)
                    }
                }
            }
        });

        fv.on('core.field.invalid', function(fieldName) {
            if (fieldName == 'startDate' || fieldName == 'endDate') {
                const field = document.querySelector(`[name="${fieldName}"]`);
                if (field.classList.contains(INVALID_CLASS)) {
                    const parent = field.closest(".form-floating-custom");
                    const inputs = parent.getElementsByTagName('input');

                    for (let index = 0; index < inputs.length; index++) {
                        const element = inputs[index];
                        element.classList.remove(VALID_CLASS)
                        element.classList.add(INVALID_CLASS)
                    }
                }
            }
        });

        fv.on('core.field.valid', function(fieldName) {
            if (fieldName == 'startDate' || fieldName == 'endDate') {
                const field = document.querySelector(`[name="${fieldName}"]`);
                if (field.classList.contains(VALID_CLASS)) {
                    const parent = field.closest(".form-floating-custom");
                    const inputs = parent.getElementsByTagName('input');

                    for (let index = 0; index < inputs.length; index++) {
                        const element = inputs[index];
                        element.classList.remove(INVALID_CLASS)
                        element.classList.add(VALID_CLASS)
                    }
                }
            }
        });

        fv.on('core.field.valid', function(fieldName) {
            if (fieldName == 'speaker') {
                const field = document.querySelector(`[name="${fieldName}"]`);
                if (field.classList.contains(VALID_CLASS)) {
                    const parent = field.closest(".form-floating-custom");
                    const inputs = parent.getElementsByTagName('span');

                    for (let index = 0; index < inputs.length; index++) {
                        const element = inputs[index];
                        element.classList.remove(INVALID_CLASS)
                        element.classList.add(VALID_CLASS)
                    }
                }
            }
        });

        return fv;
    }

    return fv;
};

/**
 * Function to build orm validation rules
 * @returns 
 */
const buildFormFieldsRules = () => {
    const form = document.querySelector(ElementSelectors.UserForm)

    return {
        name: {
            validators: {
                notEmpty: {
                    message: 'The name field is required.'
                },
                stringLength: {
                    max: 255,
                    message: 'The name must be less than 255 characters.'
                }
            }
        },
        speaker: {
            validators: {
                notEmpty: {
                    message: 'The speaker field is required.'
                },
                stringLength: {
                    max: 255,
                    message: 'The speaker must be less than 255 characters.'
                }
            }
        },
        level: {
            validators: {
                notEmpty: {
                    message: 'The level field is required.'
                },
            }
        },
        startDate: {
            validators: {
                notEmpty: {
                    message: 'The start date field is required.'
                },
            }
        },
        endDate: {
            validators: {
                notEmpty: {
                    message: 'The end date field is required.'
                },
            }
        }
    };
};
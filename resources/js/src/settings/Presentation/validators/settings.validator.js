import { ElementSelectors } from "../../config/selectors";

let fv = null;

/**
 * Function to create form validation
 * @returns {FormValidation} fv
 */
export const getSettingFormValidation = () => {
    if (!fv) {
        const $elemFv = document.querySelector(ElementSelectors.SettingsForm);
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
        title: {
            validators: {
                notEmpty: {
                    message: 'The title field is required.'
                },
                stringLength: {
                    max: 60,
                    message: 'The name must be less than 60 characters.'
                }
            }
        },
        speakerName: {
            validators: {
                notEmpty: {
                    message: 'The speaker name field is required.'
                },
                stringLength: {
                    max: 60,
                    message: 'The speaker name must be less than 60 characters.'
                }
            }
        },
        directorName: {
            validators: {
                notEmpty: {
                    message: 'The director name field is required.'
                },
                stringLength: {
                    max: 60,
                    message: 'The director name must be less than 60 characters.'
                }
            }
        },
    };
};
import speakerStore from "../../Infrastructure/store/speaker.store";
import { ElementSelectors } from "../../config/selectors";

let fv = null;

/**
 * Function to create form validation
 * @returns {FormValidation} fv
 */
export const getSpeakerFormValidation = () => {
    if (!fv) {
        const $elemFv = document.querySelector(ElementSelectors.SpeakerForm);
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
        firstName: {
            validators: {
                notEmpty: {
                    message: 'The First name field is required.'
                },
                stringLength: {
                    max: 64,
                    message: 'The First name must be less than 255 characters.'
                }
            }
        },
        lastName: {
            validators: {
                notEmpty: {
                    message: 'The Last name field is required.'
                },
                stringLength: {
                    max: 64,
                    message: 'The Last name must be less than 255 characters.'
                }
            }
        },
        email: {
            validators: {
                notEmpty: {
                    message: 'The email field is required.'
                },
                emailAddress: {
                    message: 'The value is not a valid email address.'
                },
                stringLength: {
                    max: 255,
                    message: 'The email must be less than 255 characters.'
                },
                remote: {
                    message: 'The email has already been registered.',
                    method: 'POST',
                    headers: {
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                    },
                    url: '/admin/speakers/verify',
                    data: function () {
                        const speaker = speakerStore.getSpeakerSelected();

                        return {
                            email: document.querySelector('[name="email"]').value,
                            speaker_id: speaker?.id
                        };
                    },
                }
            }
        },
        status: {
            validators: {
                notEmpty: {
                    message: 'The status field is required.'
                },
            }
        },
        linkedinProfile: {
            validators: {
                uri: {
                    message: 'The linkedin profile address is not valid',
                },
            }
        },
        website: {
            validators: {
                uri: {
                    message: 'The website address is not valid',
                },
            }
        }
    };
};
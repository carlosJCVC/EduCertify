import participantStore from "../../Infrastructure/store/participant.store";
import { ElementSelectors } from "../../config/selectors";

let fv = null;

/**
 * Function to create form validation
 * @returns {FormValidation} fv
 */
export const getParticipantFormValidation = () => {
    if (!fv) {
        const $elemFv = document.querySelector(ElementSelectors.ParticipantForm);

        fv = FormValidation.formValidation($elemFv, {
            fields: buildFormFieldsRules(),
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                bootstrap5: new FormValidation.plugins.Bootstrap5({
                    eleValidClass: 'is-valid',
                    eleInvalidClass: 'is-invalid',
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

        // fv.on('core.field.valid', function(field) {
        //     if (field == 'email') {
        //         fv.enableValidator(field, 'remote');
        //         fv.validateField(field)
        //     }
        // });

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
                    message: 'The first name field is required.'
                },
                stringLength: {
                    max: 255,
                    message: 'The first name must be less than 255 characters.'
                }
            }
        },
        lastName: {
            validators: {
                notEmpty: {
                    message: 'The last name field is required.'
                },
                stringLength: {
                    max: 255,
                    message: 'The last name must be less than 255 characters.'
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
                    url: '/admin/participants/verify',
                    data: function () {
                        const participant = participantStore.getParticipantSelected();

                        return {
                            email: document.querySelector('[name="email"]').value,
                            participant_id: participant?.id
                        };
                    },
                    delay: 500,
                    // enabled: false
                }
            }
        },
        status: {
            validators: {
                notEmpty: {
                    message: 'The status field is required.'
                },
            }
        }
    };
};
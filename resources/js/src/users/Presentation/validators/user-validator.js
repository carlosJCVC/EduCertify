import { ElementSelectors } from "../../config/selectors";

let fv = null;

/**
 * Function to create form validation
 * @returns {FormValidation} fv
 */
export const getUserFormValidation = () => {
    if (!fv) {
        const $elemFv = document.querySelector(ElementSelectors.UserForm);
        const rowSelector = '.col-12';

        fv = FormValidation.formValidation($elemFv, {
            fields: buildFormFieldsRules(),
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                bootstrap5: new FormValidation.plugins.Bootstrap5({
                    eleValidClass: '',
                    rowSelector: rowSelector
                }),
                // defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
                autoFocus: new FormValidation.plugins.AutoFocus()
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
        name: {
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
                //   remote: {
                //     message: 'The email has already been registered.',
                //     method: 'POST',
                //     headers: {
                //       'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                //     },
                //     url: '/customers/verify',
                //     data: function () {
                //       let customer;
                //       if (location.pathname.includes('/admin/customers')) {
                //         customer = CustomerStore.getCustomer();
                //       }

                //       return {
                //         email: form.querySelector('[name="email"]').value,
                //         customer_id: customer? customer.id : 0
                //       };
                //     }
                //   }
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
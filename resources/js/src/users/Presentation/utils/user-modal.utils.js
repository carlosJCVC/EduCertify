import 'dropify/dist/js/dropify.min';
import { ElementSelectors } from "../../config/selectors";
import { setUserFormValues } from "./user-form.utils";
import { getUser } from "../../Application/useCases/get-user.usecase";
import { getUserFormValidation } from '../validators/user-validator';
import { includeConfigToFields } from './include-config-to-fields-utils';

/**
 * Funtion to sow modal
 * @param {int} id 
 */
export const showCreateUserModal = () => {
    const modal = getUserModal();

    modal._element.querySelector('.modal-title').textContent = `Create New User`;

    getUserFormValidation()
    includeConfigToFields()

    modal.show();
}

/**
 * Funtion to sow modal
 * @param {int} id 
 */
export const showEditUserModal = async (id) => {
    if (!id)
        throw new Error('Argument :id is required');

    const modal = getUserModal();
    const user = await getUser(id);

    modal._element.querySelector('.modal-title').textContent = `Edit User: ${user.firstName}`;

    setUserFormValues(user);
    getUserFormValidation()
    includeConfigToFields()

    modal.show();
}

/**
 * Funtion to get a Modal
 * @returns {Modal}
 */
export const getUserModal = () => {
    const modalEl = document.querySelector(ElementSelectors.UserModal)
    const modal = bootstrap.Modal.getOrCreateInstance(modalEl)

    return modal;
}
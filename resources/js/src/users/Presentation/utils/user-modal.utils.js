import $ from 'jquery';
import 'dropify/dist/js/dropify.min';
import { ElementSelectors } from "../../config/selectors";
import { resetFileField, setUserFormValues } from "./user-form.utils";
import { getUser } from "../../Application/useCases/get-user.usecase";
import { getUserFormValidation } from '../validators/user-validator';

/**
 * Funtion to sow modal
 * @param {int} id 
 */
export const showCreateUserModal = () => {
    const modal = getUserModal();

    resetFileField()
    modal._element.querySelector('.modal-title').textContent = `Create New User`;
    getUserFormValidation()

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
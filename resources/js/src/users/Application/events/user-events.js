import userStore from "../../Infrastructure/store/user.store";
import { resetUserFormValues } from "../../Presentation/utils/user-form.utils";
import { getUserModal, showCreateUserModal, showEditUserModal } from "../../Presentation/utils/user-modal.utils";
import { ElementSelectors } from "../../config/selectors";
import { deleteUser } from "../useCases/delete-user.usecase";
import { saveUser } from "../useCases/save-user.usecase";

/**
 * User UI Events
 */
export const renderUserEvents = () => {
    const createNewUserButton = document.querySelector(ElementSelectors.NewUserButton);
    const submitUserButton = document.querySelector(ElementSelectors.SaveUserButton);
    const modal = getUserModal();

    createNewUserButton.addEventListener('click', (event) => {
        showCreateUserModal();
    });

    submitUserButton.addEventListener('click', (event) => {
        saveUser();
    });

    modal._element.addEventListener('hidden.bs.modal', function (event) {
        userStore.resetUserSelected();

        resetUserFormValues();
    });
}

/**
 * Actions Datatable Events
 */
export const renderDatatableEvents = () => {
    const editUserButtons = document.querySelectorAll(ElementSelectors.EditUserButton);
    const deleteUserButtons = document.querySelectorAll(ElementSelectors.DeleteUserButton);

    // const btnEdits = document.getElementsByClassName('btn-edit');
    editUserButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const parent = e.target.closest(ElementSelectors.EditUserButton);
            const id = parent.getAttribute('data-id');

            showEditUserModal(id);
        })
    });

    deleteUserButtons.forEach(btn => {
        btn.addEventListener('click', async (event) => {
            const parent = event.target.closest(ElementSelectors.DeleteUserButton);
            const id = parent.getAttribute('data-id');
    
            await deleteUser(id);

            const datatable = userStore.getUserDatatable();
            datatable.ajax.reload();
        });
    });
}

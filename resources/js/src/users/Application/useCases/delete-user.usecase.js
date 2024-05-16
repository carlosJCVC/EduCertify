import { confirmAlert, loadingAlert, notifyAlert } from "../../../utils/alerts";
import UserService from "../../Infrastructure/services/user.service";
import userStore from "../../Infrastructure/store/user.store";

const userService = new UserService();

/**
 * Function to delete a user
 * @param {int} id
 * @return Promise<bool> 
 */
export const deleteUser = (id) => {
    if (!id)
        throw new Error('Argument :id is required');

    try {
        const title = "Confirm User Deletion";
        const message = "Are you sure you want to delete this user? This action cannot be undone and the user's data will be permanently removed from the system.";
        confirmAlert(title, message, async ({ value }) => {
            if (!value) return;

            loadingAlert();

            await userService.deleteById(id);

            notifyAlert("Success!", "User record has been successfully deleted!");

            const datatable = userStore.getUserDatatable();
            datatable.ajax.reload();
        });

        return true;
    } catch (error) {
        throw error;
    }
}
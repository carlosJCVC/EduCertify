import { loadingAlert, notifyAlert } from "../../../utils/alerts";
import UserMapper from "../../Domain/mappers/user.mapper";
import UserService from "../../Infrastructure/services/user.service";
import userStore from "../../Infrastructure/store/user.store";
import { getUserFormValues } from "../../Presentation/utils/user-form.utils";
import { getUserModal } from "../../Presentation/utils/user-modal.utils";
import { getUserFormValidation } from "../../Presentation/validators/user-validator";
import { Validator } from "../../config/validator";

const userService = new UserService();

/**
 * Function to update user
 * @param {int} id
 * @param {FormData} data
 * 
 * @return User user 
 */
export const updateUser = async (id) => {
    try {
        const modal = getUserModal();
        const datatable = userStore.getUserDatatable();
        const fv = getUserFormValidation();//questions validator email en remote
        const status = await fv.validate();

        if (status == Validator.ValidForm) {
            const userData = getUserFormValues();
            const user = UserMapper.fromFormData(userData);

            loadingAlert();
            const newUser = await userService.updateById(id, user);
            modal.hide();

            notifyAlert('Success!', 'User has been updated successfully!', () => {
                datatable.ajax.reload();
            })

            return newUser;
        }
    } catch (error) {
        throw error;
    }
}

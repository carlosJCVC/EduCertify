
import UserService from "../../Infrastructure/services/user.service";
import { getUserFormValidation } from "../../Presentation/validators/user-validator";
import UserMapper from "../../Domain/mappers/user.mapper";
import userStore from "../../Infrastructure/store/user.store";
import { getUserModal } from "../../Presentation/utils/user-modal.utils";
import { getUserFormValues } from "../../Presentation/utils/user-form.utils";
import { loadingAlert, notifyAlert } from "../../../utils/alerts";

const userService = new UserService();

/**
 * Function to create user
 * @param {FormData} data 
 * @return User user 
*/
export const createUser = async (formData) => {    
    try {
        const modal = getUserModal();
        const datatable = userStore.getUserDatatable();
        const fv = getUserFormValidation();
        const status = await fv.validate();

        if (status == "Valid") {
            const userData = getUserFormValues();
            const user = UserMapper.fromFormData(userData);
    
            loadingAlert();
            const newUser = await userService.create(user);
            modal.hide();

            notifyAlert('Success!', 'User has been created successfully!', () => {
                datatable.ajax.reload();
            })

            return newUser;
        }
    } catch (error) {
        throw error;
    }
}

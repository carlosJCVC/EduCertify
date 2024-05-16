import userStore from '../../Infrastructure/store/user.store';
import { getUserFormValues } from '../../Presentation/utils/user-form.utils';
import { createUser } from './create-user.usecase';
import { updateUser } from './update-user.usecase';

/**
 * Function to get user
 * @param {int} id
 * @return void 
 */
export const saveUser = async () => {
    const userSelected = userStore.getUserSelected();
    const data = getUserFormValues();

    if (userSelected) {
        await updateUser(userSelected.id, data);

        userStore.resetUserSelected()
    } else {
        await createUser(data);
    }
}

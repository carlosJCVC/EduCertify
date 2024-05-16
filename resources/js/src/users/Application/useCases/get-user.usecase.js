import userStore from '../../Infrastructure/store/user.store';
import UserService from "../../Infrastructure/services/user.service";

const userService = new UserService();

/**
 * Function to get user
 * @param {int} id
 * @return User user 
 */
export const getUser = async (id) => {
    if (!id)
        throw new Error('Argument :id is required');

    try {
        const user = await userService.findById(id);
        userStore.setUserSelected(user);

        return user;
    } catch (error) {
        throw error;
    }
}
import { User } from "../models/user.model";

const UserMapper = {
    /**
     * Function to transform from User model to object 
     * @param {User} user 
     * @returns {object}
     */
    toObject: user => {
        const { id, firstName, lastName, email, status, avatar } = user;

        return {
            id,
            first_name: firstName,
            last_name: lastName,
            email,
            status,
            avatar
        };
    },

    /**
     * Function to transaform json to User model
     * @param {*} response 
     * @returns 
     */
    fromJson: response => {
        const { id, first_name, last_name, email, status, avatar } = response;

        return new User({
            id,
            firstName: first_name,
            lastName: last_name,
            email,
            status,
            avatar,
        });
    },

    /**
     * Function to transaform FormData to User model
     * @param {FormData} formData 
     * @returns 
     */
    fromFormData: formData => {
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const email = formData.get('email');
        const status = formData.get('status');
        const avatar = formData.get('avatar');

        return new User({
            firstName,
            lastName,
            email,
            status,
            avatar,
        });
    },
};

export default UserMapper;
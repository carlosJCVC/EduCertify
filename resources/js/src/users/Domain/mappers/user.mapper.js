import { User } from "../models/user.model";

const UserMapper = {
    /**
     * Function to transform from User model to object 
     * @param {User} user 
     * @returns {object}
     */
    toObject: user => {
        const { id, name, email, status } = user;

        return {
            id,
            name,
            email,
            status,
        };
    },

    /**
     * Function to transaform json to User model
     * @param {*} response 
     * @returns 
     */
    fromJson: response => {
        const { id, name, email, status } = response;

        return new User({
            id,
            name,
            email,
            status,
        });
    },

    /**
     * Function to transaform FormData to User model
     * @param {FormData} formData 
     * @returns 
     */
    fromFormData: formData => {
        const name = formData.get('name');
        const email = formData.get('email');
        const status = formData.get('status');

        return new User({
            name,
            email,
            status,
        });
    },
};

export default UserMapper;
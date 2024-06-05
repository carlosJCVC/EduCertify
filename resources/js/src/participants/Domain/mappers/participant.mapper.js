import { Participant } from "../models/participant.model";

const ParticipantMapper = {
    /**
     * Function to transform from Participant model to object 
     * @param {Participant} participant 
     * @returns {object}
     */
    toObject: participant => {
        const { id, firstName, lastName, birthdate, email, status, avatar } = participant;

        return {
            id,
            first_name: firstName,
            last_name: lastName,
            birthdate,
            email,
            status,
            avatar
        };
    },

    /**
     * Function to transaform json to Participant model
     * @param {*} response 
     * @returns 
     */
    fromJson: response => {
        const { id, first_name, last_name, birthdate, email, status, profile_photo_url } = response;

        return new Participant({
            id,
            firstName: first_name,
            lastName: last_name,
            birthdate,
            email,
            status,
            avatar: profile_photo_url,
        });
    },

    /**
     * Function to transaform FormData to Participant model
     * @param {FormData} formData 
     * @returns 
     */
    fromFormData: formData => {
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const birthdate = formData.get('birthdate');
        const email = formData.get('email');
        const stringValue = formData.get('status');
        const avatar = formData.get('avatar');

        const values = JSON.parse(stringValue);

        return new Participant({
            firstName,
            lastName,
            birthdate,
            email,
            status: values[0].value,
            avatar,
        });
    },
};

export default ParticipantMapper;
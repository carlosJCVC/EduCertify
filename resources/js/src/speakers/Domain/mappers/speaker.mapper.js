import { Speaker } from "../models/speaker.model";

const SpeakerMapper = {
    /**
     * Function to transform from Speaker model to object 
     * @param {Speaker} speaker 
     * @returns {object}
     */
    toObject: speaker => {
        const {
            id,
            firstName,
            lastName,
            email,
            status,
            avatar,
            phoneNumber,
            linkedinProfile,
            website,
            expertises,
            biography,
            notes
        } = speaker;

        return {
            id,
            first_name: firstName,
            last_name: lastName,
            email,
            status,
            avatar,
            phone_number: phoneNumber,
            linkedin_profile: linkedinProfile,
            website,
            expertise: expertises,
            biography,
            notes,
        };
    },

    /**
     * Function to transaform json to Speaker model
     * @param {*} response 
     * @returns {Speaker} speaker
     */
    fromJson: response => {
        const {
            id,
            first_name,
            last_name,
            email,
            status,
            profile_photo_url,
            phone_number,
            linkedin_profile,
            website,
            expertise,
            biography,
            notes
        } = response;

        return new Speaker({
            id,
            firstName: first_name,
            lastName: last_name,
            email,
            status,
            avatar: profile_photo_url,
            phoneNumber: phone_number,
            linkedinProfile: linkedin_profile,
            website,
            expertises: expertise,
            biography,
            notes,
        });
    },

    /**
     * Function to transaform FormData to Speeaker model
     * @param {FormData} formData 
     * @returns {Speaker} speaker
     */
    fromFormData: formData => {
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const email = formData.get('email');
        const stringExpertises = formData.get('expertises');
        const stringStatusValue = formData.get('status');
        const avatar = formData.get('avatar');
        const phoneNumber = formData.get('phoneNumber');
        const linkedinProfile = formData.get('linkedinProfile');
        const website = formData.get('website');
        const biography = formData.get('biography');
        const notes = formData.get('notes');

        const statusValues = JSON.parse(stringStatusValue);
        const valueExpertises = JSON.parse(stringExpertises);

        return new Speaker({
            firstName,
            lastName,
            email,
            status: statusValues[0].value,
            avatar,
            phoneNumber,
            linkedinProfile,
            website,
            expertises: valueExpertises.map(item => item.value),
            biography,
            notes,
        });
    },
};

export default SpeakerMapper;
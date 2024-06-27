import { Setting } from "../models/settting.model";

const SettingMapper = {
    /**
     * Function to transform from Setting model to object 
     * @param {Setting} setting 
     * @returns {object}
     */
    toObject: setting => {
        const { title, logoImageUrl, backgroundImageUrl, backgroundColor, textColor, directorSignature, instructorSignature, speakerName, directorName} = setting;

        return {
            title,
            logo_image: logoImageUrl,
            background_image: backgroundImageUrl,
            background_color: backgroundColor,
            text_color: textColor,
            director_signature: directorSignature,
            instructor_signature: instructorSignature,
            speaker_name: speakerName,
            director_name: directorName

        };
    },

    /**
     * Function to transaform json to Setting model
     * @param {*} response 
     * @returns {Setting}
     */
    fromJson: response => {
        const {
            title,
            logo_image_url,
            background_image_url,
            background_color,
            text_color,
            director_signature_data,
            director_signature_data_url,
            speaker_signature_data,
            speaker_signature_data_url,
            speaker_name,
            director_name
        } = response;

        return new Setting({
            title,
            logoImage: { url: logo_image_url },
            backgroundImage: { url: background_image_url },
            backgroundColor: background_color,
            textColor: text_color,
            directorSignature: {
                data: director_signature_data,
                url: director_signature_data_url,
            },
            speakerSignature: {
                data: speaker_signature_data,
                url: speaker_signature_data_url,
            },
            speakerName: speaker_name,
            directorName: director_name
        });
    },
};

export default SettingMapper;

import { Preference } from "../models/preference.model";

const PreferenceMapper = {
    /**
     * Function to transform from Preference model to object 
     * @param {Preference} preference 
     * @returns {object}
     */
    toObject: preference => {
        const { id, backgroundImageUrl, backgroundColor, textColor, signatureData } = preference;

        return {
            id,
            background_image_path: backgroundImageUrl,
            background_color: backgroundColor,
            text_color: textColor,
            signature_path: signatureData,
        };
    },

    /**
     * Function to transaform json to Preference model
     * @param {*} response 
     * @returns 
     */
    fromJson: response => {
        const { id, background_image_url, background_color, text_color, speaker_signature_data, speaker_signature_data_url } = response;

        return new Preference({
            id,
            backgroundImage: 
            {
                url: background_image_url,
                file: undefined
            },
            backgroundColor: background_color,
            textColor: text_color,
            speakerSignature: {
                url: speaker_signature_data_url,
                data: speaker_signature_data
            }
        });
    },
};

export default PreferenceMapper;
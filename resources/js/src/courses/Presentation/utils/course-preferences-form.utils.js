import { ElementSelectors } from "../../config/selectors";
import { setBgImageField } from "./include-dropify-to-fields-utils";
import { getOrCreateBackgroundPickrField, getOrCreateTextPickrField } from "./include-pickr-to-fields.utils";
import { getOrCreateSignatureField, setSignatureField } from "./include-signature-to-fields.utls";

/**
 * Return Form Values from Course 
 * @returns FormData formData
 */
export const getCoursePreferencesFormValues = () => {
    const form = getCoursePreferencesForm();
    const formData = new FormData(form);
    const bgColorPickr = getOrCreateBackgroundPickrField()
    const textColorPickr = getOrCreateTextPickrField()
    const signaturePad = getOrCreateSignatureField()

    const data = {
        bgimage: formData.get('backgroundImage'),
        background_color: bgColorPickr.getColor().toRGBA().toString(),
        text_color: textColorPickr.getColor().toRGBA().toString(),
        signature: signaturePad.toDataURL('image/svg+xml'),
    }

    return data;
}

/**
 * Function to set values in form
 * @param {Preference} preferences 
 */
export const setCoursePreferencesFormValues = (preferences) => {
    if (preferences) {
        const textColorPickr = getOrCreateTextPickrField()
        const bgColorPickr = getOrCreateBackgroundPickrField()

        textColorPickr.setColor(preferences.textColor)
        bgColorPickr.setColor(preferences.backgroundColor)
        // textColorPickr.applyColor(true)
        // bgColorPickr.applyColor(true)

        setBgImageField(preferences.backgroundImageUrl)
        setSignatureField(preferences.signatureData)
    }
}

/**
 * Funtion to get the course preferences form
 * @returns {HTML} form
 */
const getCoursePreferencesForm = () => {
    const form = document.querySelector(ElementSelectors.CoursePreferencesForm);

    return form;
}

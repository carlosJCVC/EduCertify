import { ElementSelectors } from "../../config/selectors";
import { setBgImageField, setLogoImageField } from "./include-dropify-to-fields-utils";
import { getOrCreateBackgroundPickrField, getOrCreateTextPickrField } from "./include-flatpick-to-fields.utils";
import { setDirectorSignatureField, setSpeakerSignatureField } from "./include-signature-to-fields.utls.js";

/**
 * Function to set values in form
 * @param {Setting} settings
 */
export const setSettingsFormValues = (settings) => {
    const form = getSettingsForm();
    const textColorPickr = getOrCreateTextPickrField()
    const bgColorPickr = getOrCreateBackgroundPickrField()

    form.querySelector('[name="title"]').value = settings.title;
    form.querySelector('[name="speakerName"]').value = settings.speakerName;
    form.querySelector('[name="directorName"]').value = settings.directorName;

    if (settings.textColor) {
        textColorPickr.setColor(settings.textColor)
    }

    if (settings.backgroundColor) {
        bgColorPickr.setColor(settings.backgroundColor)
    }

    if (settings.backgroundImage.url) {
        setBgImageField(settings.backgroundImage.url)
    }

    if (settings.logoImage.url) {
        setLogoImageField(settings.logoImage.url)
    }
    if (settings.speakerSignature.data) {
        setSpeakerSignatureField(settings.speakerSignature.data)
    }

    if (settings.directorSignature.data) {
        setDirectorSignatureField(settings.directorSignature.data)
    }

}

/**
 * Funtion to get the settngs form
 * @returns {HTML} form
 */
export const getSettingsForm = () => {
    const form = document.querySelector(ElementSelectors.SettingsForm);

    return form;
}

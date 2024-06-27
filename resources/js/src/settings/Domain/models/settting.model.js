import { getOrCreateBackgroundPickrField, getOrCreateTextPickrField } from "../../Presentation/utils/include-flatpick-to-fields.utils";
import { getOrCreateDirectorSignatureField, getOrCreateSpeakerSignatureField } from "../../Presentation/utils/include-signature-to-fields.utls.js";
import { getSettingsForm } from "../../Presentation/utils/setting-form.utils";

export class Setting {
    /**
     * Constructor
     * @param {String} title
     * @param {Object} logoImage
     * @param {Object} backgroundImage
     * @param {String} backgroundColor
     * @param {String} textColor
     * @param {String} directorSignature
     * @param {String} speakerSignature
     * @param {String} speakerName
     * @param {String} directorName
     */
    constructor({ title, logoImage, backgroundImage, backgroundColor, textColor, directorSignature, speakerSignature, speakerName, directorName }) {
        this.title = title;
        this.logoImage = {
            url: logoImage.url,
            file: logoImage.file
        };
        this.backgroundImage = {
            url: backgroundImage.url,
            file: backgroundImage.file
        };
        this.backgroundColor = backgroundColor;
        this.textColor = textColor;
        this.directorSignature = {
            data: directorSignature.data,
            url: directorSignature.url,
        };
        this.speakerSignature = {
            data: speakerSignature.data,
            url: speakerSignature.url,
        };
        this.speakerName = speakerName;
        this.directorName = directorName;
    }

    /**
     * updateing model fields
     */
    update() {
        const form = getSettingsForm();
        const formData = new FormData(form);
        const bgColorPickr = getOrCreateBackgroundPickrField()
        const textColorPickr = getOrCreateTextPickrField()
        const speakerSignaturePad = getOrCreateSpeakerSignatureField()
        const directorSignaturePad = getOrCreateDirectorSignatureField()

        this.title = formData.get('title')
        this.logoImage.file = formData.get('logoImage')
        this.backgroundImage.file = formData.get('backgroundImage')
        this.backgroundColor = bgColorPickr.getColor().toRGBA().toString()
        this.textColor = textColorPickr.getColor().toRGBA().toString()

        this.speakerSignature.url = !speakerSignaturePad.isEmpty()? speakerSignaturePad.toDataURL('image/svg+xml') : undefined
        this.speakerSignature.data = !speakerSignaturePad.isEmpty()? speakerSignaturePad.toData() : undefined
        this.directorSignature.url = !directorSignaturePad.isEmpty()? directorSignaturePad.toDataURL('image/svg+xml') : undefined
        this.directorSignature.data = !directorSignaturePad.isEmpty()? directorSignaturePad.toData() : undefined

        this.speakerName = formData.get('speakerName')
        this.directorName = formData.get('directorName')
    }
}
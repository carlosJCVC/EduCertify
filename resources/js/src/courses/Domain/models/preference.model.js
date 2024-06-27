export class Preference {
    /**
     * Constructor
     * @param {STring} backgroundImageUrl
     * @param {String} backgroundColor
     * @param {String} textColor
     * @param {String} signatureUrl
     */
    constructor({ id = undefined, backgroundImageUrl, backgroundColor, textColor, speakerSignatureData, speakerSignatureDataURL }) {
        this.id = id;
        this.backgroundImageUrl = backgroundImageUrl;
        this.backgroundColor = backgroundColor;
        this.textColor = textColor;
        this.speakerSignatureData = speakerSignatureData;
        this.speakerSignatureDataURL = speakerSignatureDataURL;
    }
}

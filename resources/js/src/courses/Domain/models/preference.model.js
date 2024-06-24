export class Preference {
    /**
     * Constructor
     * @param {STring} backgroundImageUrl
     * @param {String} backgroundColor
     * @param {String} textColor
     * @param {String} signatureUrl
     */
    constructor({ id = undefined, backgroundImageUrl, backgroundColor, textColor, signatureData }) {
        this.id = id;
        this.backgroundImageUrl = backgroundImageUrl;
        this.backgroundColor = backgroundColor;
        this.textColor = textColor;
        this.signatureData = signatureData;
    }
}

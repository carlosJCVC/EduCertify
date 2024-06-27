export class Preference {
    /**
     * Constructor
     * @param {Object} backgroundImage
     * @param {String} backgroundColor
     * @param {String} textColor
     * @param {Object} signatureUrl
     */
    constructor({ id = undefined, backgroundImage, backgroundColor, textColor, speakerSignature }) {
        this.id = id;
        this.backgroundImage = {
            url: backgroundImage.url,
            file: backgroundImage.file,
        };
        this.backgroundColor = backgroundColor;
        this.textColor = textColor;
        this.speakerSignature = {
            data: speakerSignature.data,
            url: speakerSignature.url
        };
    }
}

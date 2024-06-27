import SignaturePad from 'signature_pad';

let speakerSignaturePad;
let directorSignaturePad;
let signaturePad;

/**
 * include signature lib in settingCourse fields
 */
export const includeSignatureToFields = () => {
    getOrCreateSpeakerSignatureField();
    getOrCreateDirectorSignatureField();
}

/**
 * Get or create signature intance
 * @returns Dropify
 */
export const getOrCreateSpeakerSignatureField = () => {
    if (speakerSignaturePad) {
        return speakerSignaturePad;
    }

    // const wrapper = document.querySelector("#signature-speaker-wrapper");
    const canvas = document.querySelector(".signature-pad");
    speakerSignaturePad = new SignaturePad(canvas, {
        backgroundColor: 'rgb(255, 255, 255)'
    });
    resizeCanvas(speakerSignaturePad, canvas);

    return speakerSignaturePad;
}

/**
 * Get or create signature intance
 * @returns Dropify
 */
export const getOrCreateDirectorSignatureField = () => {
    if (directorSignaturePad) {
        return directorSignaturePad;
    }

    const canvas = document.querySelector(".director-signature-pad");
    directorSignaturePad = new SignaturePad(canvas, {
        backgroundColor: 'rgb(255, 255, 255)'
    });
    resizeCanvas(directorSignaturePad, canvas);

    return directorSignaturePad;
}

/**
 * Get or create signature intance
 * @returns Dropify
 */
export const getOrCreateSignatureField = () => {
    if (signaturePad) {
        return signaturePad;
    }

    // const wrapper = document.querySelector("#signature-speaker-wrapper");
    const canvas = document.querySelector("#signature-pad");
    signaturePad = new SignaturePad(canvas, {
        backgroundColor: 'rgb(255, 255, 255)'
    });
    resizeCanvas(signaturePad, canvas);

    return signaturePad;
}

/**
 * Function to set signature in course details form
 * @param {string} data
 */
export const setSpeakerSignatureField = (data) => {
    const signaturePad = getOrCreateSpeakerSignatureField();

    signaturePad.fromData(data);
};

/**
 * Function to set director signature settings
 * @param {string} data
 */
export const setDirectorSignatureField = (data) => {
    const signaturePad = getOrCreateDirectorSignatureField();

    signaturePad.fromData(data);
};

/**
 * FUnction to resize the signature canvas
 * @param {SignaturePad} pad 
 * @param {Canvas} canvas 
 */
const resizeCanvas = (pad, canvas) => {
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
 
    pad.clear();
    pad.on();
}

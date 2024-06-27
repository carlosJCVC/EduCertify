import SignaturePad from 'signature_pad';
import { ElementSelectors } from '../../config/selectors';

let signaturePad;

/**
 * include signature lib in settingCourse fields
 */
export const includeSignatureToFields = () => {
    getOrCreateSignatureField();
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
    const canvas = document.querySelector(ElementSelectors.SignaturePad);
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
export const setSignatureField = (data) => {
    const signaturePad = getOrCreateSignatureField();

    const canvas = document.querySelector('#signature-pad');
    // resizeCanvas(signaturePad, canvas);
    signaturePad.fromData(data, { ratio: 1 , xOffset: 50});
};

/**
 * FUnction to resize the signature canvas
 * @param {SignaturePad} pad 
 * @param {Canvas} canvas 
 */
export const resizeCanvas = (pad, canvas) => {
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
 
    pad.clear();
    pad.on();
}
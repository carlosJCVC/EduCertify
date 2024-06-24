import '@simonwep/pickr/dist/themes/classic.min.css';   // 'classic' theme
import Pickr from '@simonwep/pickr';
import '../assets/css/custom-pickr.scss'

let backgroundPickr;
let textPickr;

/**
 * include dropify libe in participant fields
 */
export const includePickrToFields = () => {
    getOrCreateBackgroundPickrField();
    getOrCreateTextPickrField();
}

/**
 * Get or create dropify intance
 * @returns Dropify
 */
export const getOrCreateBackgroundPickrField = () => {
    if (backgroundPickr) {
        return backgroundPickr;
    }

    const bgColorPicker = document.querySelector('#bg-color-picker');
    backgroundPickr = Pickr.create({
        el: bgColorPicker,
        theme: 'classic',
        padding: 20,
        default: 'rgba(255, 255, 255, 1)',
        swatches: getColorSwatches(),
        components: getPickrComponents()
    });

    return backgroundPickr;
}

/**
 * Get or create dropify intance
 * @returns Dropify
 */
export const getOrCreateTextPickrField = () => {
    if (textPickr) {
        return textPickr;
    }

    const bgColorPicker = document.querySelector('#text-color-picker');
    textPickr = Pickr.create({
        el: bgColorPicker,
        theme: 'classic',
        default: 'rgba(0, 0, 0, 1)',
        swatches: getColorSwatches(),
        components: getPickrComponents()
    });

    return textPickr;
}

/**
 * Get color samples to display in pickr
 * @returns {Array} colors
 */
const getColorSwatches = () => {
    // return [
    //     'rgba(102, 108, 232, 1)',
    //     'rgba(40, 208, 148, 1)',
    //     'rgba(255, 73, 97, 1)',
    //     'rgba(255, 145, 73, 1)',
    //     'rgba(30, 159, 242, 1)'
    // ];
    return [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ];
}

/**
 * Get componets from pickr
 * @returns {Object} componets
 */
const getPickrComponents = () => {
    return {
        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: false,
            hsva: true,
            cmyk: false,
            input: true,
            clear: true,
            save: true
        }
    }
}
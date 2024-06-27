import { getOrCreateDirectorSignatureField, getOrCreateSpeakerSignatureField } from "../../Presentation/utils/include-signature-to-fields.utls.js";
import { ElementSelectors } from "../../config/selectors";
import { previewCertificate } from "../useCases/preview-certificate.usecase";
import { updateSettings } from "../useCases/update-settings.usecase";

/**
 * Actions Datatable Events
 */
export const renderSettingEvents = () => {
    const submitSettingsButton = document.querySelector(ElementSelectors.SubmitSettingsButton);
    const previewCertificateButton = document.querySelector(ElementSelectors.PreviewCertificateButton);
    const speakerSignatureUndoButton = document.querySelector(ElementSelectors.SpeakerSignatureUndoButton);
    const speakerSignatureClearButton = document.querySelector(ElementSelectors.SpeakerSignatureClearButton);
    const directorSignatureUndoButton = document.querySelector(ElementSelectors.DirectorSignatureUndoButton);
    const directorSignatureClearButton = document.querySelector(ElementSelectors.DirectorSignatureClearButton);

    submitSettingsButton.addEventListener('click', (event) => {
        updateSettings();
    });

    previewCertificateButton.addEventListener('click', (event) => {
        previewCertificate()
    });

    speakerSignatureUndoButton.addEventListener('click', (event) => {
        const signaturePad = getOrCreateSpeakerSignatureField()
        const data = signaturePad.toData();

        if (data) {
            data.pop(); // remove the last dot or line
            signaturePad.fromData(data);
        }
    });

    speakerSignatureClearButton.addEventListener('click', (event) => {
        const signaturePad = getOrCreateSpeakerSignatureField()

        signaturePad.clear();
    });

    directorSignatureUndoButton.addEventListener('click', (event) => {
        const signaturePad = getOrCreateDirectorSignatureField()
        const data = signaturePad.toData();

        if (data) {
            data.pop(); // remove the last dot or line
            signaturePad.fromData(data);
        }
    });

    directorSignatureClearButton.addEventListener('click', (event) => {
        const signaturePad = getOrCreateDirectorSignatureField()

        signaturePad.clear();
    });
}

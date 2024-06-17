import speakerStore from "../../Infrastructure/store/speaker.store";
import { getSpeakerModal, showCreateSpeakerModal, showEditSpeakerModal } from "../../Presentation/utils/speaker-modal.utils";
import { ElementSelectors } from "../../config/selectors";
import { deleteSpeaker } from "../useCases/delete-speaker.usecase";
import { saveSpeaker } from "../useCases/save-speaker.usecase";

/**
 * Participant UI Events
 */
export const renderListSpeakerEvents = () => {
    const createNewSpeakerButton = document.querySelector(ElementSelectors.NewSpeakerButton);
    const submitSpeakerButton = document.querySelector(ElementSelectors.SaveSpeakerButton);
    const modal = getSpeakerModal();

    createNewSpeakerButton?.addEventListener('click', (event) => {
        showCreateSpeakerModal();
    });

    submitSpeakerButton.addEventListener('click', (event) => {
        saveSpeaker();
    });
}

/**
 * Actions Datatable Events
 */
export const renderDatatableEvents = () => {
    const editSpeakerButtons = document.querySelectorAll(ElementSelectors.EditSpeakerButton);
    const deleteSpeakerButtons = document.querySelectorAll(ElementSelectors.DeleteSpeakerButton);

    editSpeakerButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const parent = e.target.closest(ElementSelectors.EditSpeakerButton);
            const id = parent.getAttribute('data-id');

            showEditSpeakerModal(id);
        })
    });

    deleteSpeakerButtons.forEach(btn => {
        btn.addEventListener('click', async (event) => {
            const parent = event.target.closest(ElementSelectors.DeleteSpeakerButton);
            const id = parent.getAttribute('data-id');

            await deleteSpeaker(id);
        });
    });
}

/**
 * Event for speaker ui
 */
export const renderShowSpeakerEvents = () => {
    
}

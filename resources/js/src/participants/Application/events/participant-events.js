import participantStore from "../../Infrastructure/store/participant.store";
import { resetParticipantFormValues } from "../../Presentation/utils/participant-form.utils";
import { getParticipantModal, showCreateParticipantModal, showEditParticipantModal } from "../../Presentation/utils/participant-modal.utils";
import { ElementSelectors } from "../../config/selectors";
import { deleteParticipant } from "../useCases/delete-participant.usecase";
import { saveParticipant } from "../useCases/save-participant.usecase";

/**
 * Participant UI Events
 */
export const renderParticipantEvents = () => {
    const createNewParticipantButton = document.querySelector(ElementSelectors.NewParticipantButton);
    const submitParticipantButton = document.querySelector(ElementSelectors.SaveParticipantButton);
    const modal = getParticipantModal();

    createNewParticipantButton.addEventListener('click', (event) => {
        showCreateParticipantModal();
    });

    submitParticipantButton.addEventListener('click', (event) => {
        saveParticipant();
    });

    modal._element.addEventListener('hidden.bs.modal', function (event) {
        participantStore.resetParticipantSelected();

        resetParticipantFormValues();
    });
}

/**
 * Actions Datatable Events
 */
export const renderDatatableEvents = () => {
    const viewParticipantButtons = document.querySelectorAll(ElementSelectors.ViewParticipantButton);
    const editParticipantButtons = document.querySelectorAll(ElementSelectors.EditParticipantButton);
    const deleteParticipantButtons = document.querySelectorAll(ElementSelectors.DeleteParticipantButton);

    // const btnEdits = document.getElementsByClassName('btn-edit');
    viewParticipantButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const parent = e.target.closest(ElementSelectors.ViewParticipantButton);
            const id = parent.getAttribute('data-id');

            location.href = `${import.meta.env.VITE_APP_URL}/admin/participants/${id}/show`;
        })
    });

    editParticipantButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const parent = e.target.closest(ElementSelectors.EditParticipantButton);
            const id = parent.getAttribute('data-id');

            showEditParticipantModal(id);
        })
    });

    deleteParticipantButtons.forEach(btn => {
        btn.addEventListener('click', async (event) => {
            const parent = event.target.closest(ElementSelectors.DeleteParticipantButton);
            const id = parent.getAttribute('data-id');
    
            await deleteParticipant(id);

            const datatable = participantStore.getParticipantDatatable();
            datatable.ajax.reload();
        });
    });
}

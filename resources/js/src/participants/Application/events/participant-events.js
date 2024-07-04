import courseStore from "../../../courses/Infrastructure/store/course.store";
import participantStore from "../../Infrastructure/store/participant.store";
import { showEnrollParticipantModal } from "../../Presentation/utils/enroll-course-modal.utils";
import { getOrCreateAvatarDropifyField } from "../../Presentation/utils/include-dropify-to-fields-utils";
import { resetParticipantFormValues } from "../../Presentation/utils/participant-form.utils";
import { getParticipantModal, showCreateParticipantModal, showEditParticipantModal } from "../../Presentation/utils/participant-modal.utils";
import { ElementSelectors } from "../../config/selectors";
import { deleteParticipant } from "../useCases/delete-participant.usecase";
import { deletePhotoProfile } from "../useCases/delete-photo-profile.usecase";
import { enrollCourseParticipant } from "../useCases/enroll-course-participant.usecase";
import { saveParticipant } from "../useCases/save-participant.usecase";
import { sendCourseCertificate, sendCoursesCertificates } from "../useCases/send-certificate.usecase";
import { unenrollCourseParticipant } from "../useCases/unenroll-course-participant.usecase";

/**
 * Participant UI Events
 */
export const renderListParticipantEvents = () => {
    const createNewParticipantButton = document.querySelector(ElementSelectors.NewParticipantButton);
    const submitParticipantButton = document.querySelector(ElementSelectors.SaveParticipantButton);
    const avatarField = getOrCreateAvatarDropifyField();
    const modal = getParticipantModal();

    createNewParticipantButton?.addEventListener('click', (event) => {
        showCreateParticipantModal();
    });

    submitParticipantButton.addEventListener('click', (event) => {
        saveParticipant();
    });

    modal._element.addEventListener('hidden.bs.modal', function (event) {
        participantStore.resetParticipantSelected();

        resetParticipantFormValues();
    });

    avatarField.on('dropify.afterClear', function(event, element){
        deletePhotoProfile();
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

/**
 * Event for participant ui
 */
export const renderShowParticipantEvents = () => {
    const enrollParticipantButton = document.querySelector(ElementSelectors.EnrollParticipantButton);
    const submitEnrollCourseButton = document.querySelector(ElementSelectors.EnrollParticipantCourseButton);
    const EditParticipantButtonShow = document.querySelector(ElementSelectors.EditParticipantButtonShow);
    const SendCertificatesButton = document.querySelector(ElementSelectors.SendCertificatesButton);

    enrollParticipantButton.addEventListener('click', (event) => {
        showEnrollParticipantModal();
    });

    submitEnrollCourseButton.addEventListener('click', (event) => {
        enrollCourseParticipant();
    });

    EditParticipantButtonShow.addEventListener('click', (e) => {
        const participantId = participantStore.getParticipantSelected();
        showEditParticipantModal(participantId.id);
    });

    SendCertificatesButton?.addEventListener('click', (e) => {
        sendCoursesCertificates();
    });
    
}

/**
 * Events for courses enrolled for participant
 */
export const renderCoursesEnrolledDatatable = () => {
    const sendCertificateButtons = document.querySelectorAll(ElementSelectors.SendCertificateButton);
    const unenrollParticipantButtons = document.querySelectorAll(ElementSelectors.UnenrollParticipantButton);

    sendCertificateButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const parent = e.target.closest(ElementSelectors.SendCertificateButton);
            const courseid = parent.getAttribute('data-id');

            sendCourseCertificate(courseid);
        })
    });

    unenrollParticipantButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const parent = e.target.closest(ElementSelectors.UnenrollParticipantButton);
            const courseid = parent.getAttribute('data-id');

            unenrollCourseParticipant(courseid)
        })
    });
}
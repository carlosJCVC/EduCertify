import courseStore from "../../Infrastructure/store/course.store";
import { resetCourseFormValues } from "../../Presentation/utils/course-form.utils";
import { getCourseModal, showEditCourseModal } from "../../Presentation/utils/course-modal.utils";
import { showEnrollParticipantToCourseModal } from "../../Presentation/utils/enroll-participant-modal.utils";
import { getOrCreateSignatureField } from "../../Presentation/utils/include-signature-to-fields.utls";
import { ElementSelectors } from "../../config/selectors";
import { deleteCourse } from "../useCases/delete-course.usecase";
import { enrollParticipantCourse } from "../useCases/enroll-participant-course.usecase";
import { previewCourseCertificate } from "../useCases/preview-course-certificate.usecase";
import { saveCourse } from "../useCases/save-course.usecase";
import { sendParticipantsCertificates } from "../useCases/send-certificate.usecase";
import { unenrollParticipantCourse } from "../useCases/unenroll-participant-course.usecase";
import { updatePreference } from "../useCases/update-course-preferences.usecase";

/**
 * Course UI Events
 */
export const renderCoursesEvents = () => {
    const submitCourseButton = document.querySelector(ElementSelectors.SaveCourseButton);
    const modal = getCourseModal();

    submitCourseButton.addEventListener('click', (event) => {
        saveCourse();
    });

    modal._element.addEventListener('hidden.bs.modal', function (event) {
        courseStore.resetCourseSelected();

        resetCourseFormValues();
    });
}

/**
 * Actions Datatable Events
 */
export const renderDatatableEvents = () => {
    const viewCourseButtons = document.querySelectorAll(ElementSelectors.ViewCourseButton);
    const editCourseButtons = document.querySelectorAll(ElementSelectors.EditCourseButton);
    const deleteCourseButtons = document.querySelectorAll(ElementSelectors.DeleteCourseButton);

    //const btnEdits = document.getElementsByClassName('btn-edit');
    viewCourseButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const parent = e.target.closest(ElementSelectors.ViewCourseButton);
            const id = parent.getAttribute('data-id');

            location.href = `${import.meta.env.VITE_APP_URL}/admin/courses/${id}/show`;
        })
    });

    editCourseButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const parent = e.target.closest(ElementSelectors.EditCourseButton);
            const id = parent.getAttribute('data-id');

            showEditCourseModal(id);
        })
    });

    deleteCourseButtons.forEach(btn => {
        btn.addEventListener('click', async (event) => {
            const parent = event.target.closest(ElementSelectors.DeleteCourseButton);
            const id = parent.getAttribute('data-id');

            await deleteCourse(id);

            const datatable = courseStore.getCourseDatatable();
            datatable.ajax.reload();
        });
    });
}

/**
 * Event for course ui
 */
export const renderShowCourseEvents = () => {
    const EditCourseButtonShow = document.querySelector(ElementSelectors.EditCourseButtonShow);
    const enrollParticipantToCourseButton = document.querySelector(ElementSelectors.EnrollParticipantToCourseButton);
    const SendCertificatesToParticipantsButton = document.querySelector(ElementSelectors.SendCertificatesToParticipantsButton);
    const submitEnrollParticipantButton = document.querySelector(ElementSelectors.EnrollCourseParticipantButton);
    const submitCoursePreferencesButton = document.querySelector(ElementSelectors.SubmitCoursePreferencesButton);
    const PreviewCourseCertificateButton = document.querySelector(ElementSelectors.PreviewCourseCertificateButton);
    const SignatureUndoButton = document.querySelector(ElementSelectors.SignatureUndoButton);
    const SignatureClearButton = document.querySelector(ElementSelectors.SignatureClearButton);

    EditCourseButtonShow.addEventListener('click', (e) => {
        const courseId = courseStore.getCourseSelected();
        showEditCourseModal(courseId.id);
    });

    SendCertificatesToParticipantsButton.addEventListener('click', (e) => {
        sendParticipantsCertificates();
    });

    enrollParticipantToCourseButton.addEventListener('click', (event) => {
        showEnrollParticipantToCourseModal();
    });

    submitEnrollParticipantButton.addEventListener('click', (event) => {
        enrollParticipantCourse();
    });

    submitCoursePreferencesButton.addEventListener('click', (event) => {
        updatePreference();
    });

    PreviewCourseCertificateButton.addEventListener('click', (event) => {
        previewCourseCertificate()
    });

    SignatureUndoButton.addEventListener('click', (event) => {
        const signaturePad = getOrCreateSignatureField()
        const data = signaturePad.toData();

        if (data) {
            data.pop(); // remove the last dot or line
            signaturePad.fromData(data);
        }
    });

    SignatureClearButton.addEventListener('click', (event) => {
        const signaturePad = getOrCreateSignatureField()

        signaturePad.clear();
    });
}

/**
 * Events for courses enrolled for participant
 */
export const renderParticipantsEnrolledDatatable = () => {
    const unenrollParticipantToCourseButtons = document.querySelectorAll(ElementSelectors.UnenrollParticipantToCourseButton);

    unenrollParticipantToCourseButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const parent = e.target.closest(ElementSelectors.UnenrollParticipantToCourseButton);
            const participantid = parent.getAttribute('data-id');

            unenrollParticipantCourse(participantid)
        })
    });
}

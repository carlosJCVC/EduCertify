import courseStore from "../../Infrastructure/store/course.store";
import { resetCourseFormValues } from "../../Presentation/utils/course-form.utils";
import { getCourseModal, showCreateCourseModal, showEditCourseModal } from "../../Presentation/utils/course-modal.utils";
import { ElementSelectors } from "../../config/selectors";
import { deleteCourse } from "../useCases/delete-course.usecase";
import { saveCourse } from "../useCases/save-course.usecase";

/**
 * Course UI Events
 */
export const renderCoursesEvents = () => {
    // const createNewCourseButton = document.querySelector(ElementSelectors.NewCourseButton);
    const submitCourseButton = document.querySelector(ElementSelectors.SaveCourseButton);
    const modal = getCourseModal();

    // createNewCourseButton.addEventListener('click', (event) => {
    //     showCreateCourseModal();
    // });

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

    // // const btnEdits = document.getElementsByClassName('btn-edit');
    // viewCourseButtons.forEach(btn => {
    //     btn.addEventListener('click', (e) => {
    //         const parent = e.target.closest(ElementSelectors.ViewCourseButton);
    //         const id = parent.getAttribute('data-id');

    //         location.href = `${import.meta.env.VITE_APP_URL}/admin/course/${id}/show`;
    //     })
    // });

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

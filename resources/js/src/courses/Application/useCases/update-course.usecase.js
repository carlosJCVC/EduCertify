import { loadingAlert, notifyAlert } from "../../../utils/alerts";
import CourseMapper from "../../Domain/mappers/course.mapper";
import courseStore from "../../Infrastructure/store/course.store";
import { getCourseFormValues } from "../../Presentation/utils/course-form.utils";
import { getCourseModal } from "../../Presentation/utils/course-modal.utils";
import { getCourseFormValidation } from "../../Presentation/validators/course-validator";
import { Validator } from "../../config/validator";

/**
 * Function to update course
 * @param int id 
 * @return Course course 
 */
export const updateCourse = async (id) => {
    try {
        const modal = getCourseModal();
        const datatable = courseStore.getCourseDatatable();
        const service = courseStore.getCourseService();
        const fv = getCourseFormValidation();
        const status = await fv.validate();

        if (status == Validator.ValidForm) {
            const courseData = getCourseFormValues();
            const course = CourseMapper.fromFormData(courseData);

            loadingAlert();

            await service.updateById(id, course);
            modal.hide();

            notifyAlert('Success!', 'Course has been updated successfully!', () => {
                if (datatable) {
                    datatable.ajax.reload();
                    return;
                }

                location.reload();
            })

            return true;
        }
    } catch (error) {
        throw error;
    }
}

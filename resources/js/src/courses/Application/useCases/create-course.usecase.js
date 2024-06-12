import { loadingAlert, notifyAlert } from "../../../utils/alerts";
import CourseMapper from "../../Domain/mappers/course.mapper";
import courseStore from "../../Infrastructure/store/course.store";
import { getCourseFormValidation } from "../../Presentation/validators/course-validator";
import CourseService from "../../Infrastructure/services/course.service";
import { getCourseFormValues } from "../../Presentation/utils/course-form.utils";
import { getCourseModal } from "../../Presentation/utils/course-modal.utils";
import { Validator } from "../../../courses/config/validator";

const courseService = new CourseService();


/**
 * Function to create course
 * @return Course course 
*/
export const createCourse = async () => {
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

            const newCourse = await service.create(course);
            modal.hide();

            notifyAlert('Success!', 'Course has been created successfully!', () => {
                datatable.ajax.reload();
            })

            return newCourse;
        }
    } catch (error) {
        throw error;
    }
}

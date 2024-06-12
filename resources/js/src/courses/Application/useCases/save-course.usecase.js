import courseStore from '../../Infrastructure/store/course.store';
import { getCourseFormValues } from '../../Presentation/utils/course-form.utils';
import { createCourse } from './create-course.usecase';
import { updateCourse } from './update-course.usecase';

/**
 * Function to get course
 * @param {int} id
 * @return void 
 */
export const saveCourse = async () => {
    const courseSelected = courseStore.getCourseSelected();
    const data = getCourseFormValues();

    if (courseSelected) {
        await updateCourse(courseSelected.id);

        courseStore.resetCourseSelected()
    } else {
        await createCourse(data);
    }
}

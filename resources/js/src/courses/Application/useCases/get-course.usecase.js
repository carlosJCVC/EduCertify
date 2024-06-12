import courseStore from '../../Infrastructure/store/course.store';

/**
 * Function to get course
 * @param {int} id
 * @return Course course 
 */
export const getCourse = async (id) => {
    if (!id)
        throw new Error('Argument :id is required');

    try {
        const courseService = courseStore.getCourseService();
        const course = await courseService.findById(id);
        courseStore.setCourseSelected(course);

        return course;
    } catch (error) {
        throw error;
    }
}
import request from "@/src/utils/request";
import CourseMapper from "../../Domain/mappers/course.mapper";

class CourseService {

    constructor() {
        this.path = '/admin/courses';
        this.headers = { 'Content-Type': 'multipart/form-data' };
    }

    /**
     * Get All Records
     * @return Promise<Array<Courses>> records
     */
    async getAll(data, callback, settings) {
        try {
            const endpoint = `${this.path}/json`;
            const response = await request.get(endpoint);

            // console.log(response.data)

            callback(response.data.data);
        } catch (error) {
            console.error('Error getting courses:', error);

            throw error;
        }
    }

    /**
     * Get records by id
     *
     * @param {Number} $id
     * @return Promise<Course> course
     */
    async findById(id) {
        try {
            const endpoint = `${this.path}/${id}/show`;
            const { data: { data } } = await request.get(endpoint);

            const course = CourseMapper.fromJson(data);

            return course;
        } catch (error) {
            console.error(`Error getting course with ID ${id}:`, error);

            throw error;
        }
    }

    /**
     * Create a model.
     *
     * @param {Course} course
     * @return Promise<Course>
     */
    async create(formData) {
        try {
            const endpoint = `${this.path}/store`;
            const courseData = CourseMapper.toObject(formData);
            const { data: { data } } = await request.post(endpoint, courseData, {
                headers: this.headers
            });

            const course = CourseMapper.fromJson(data);

            return course;
        } catch (error) {
            console.error('Error creating course:', error);

            throw error;
        }
    }

    /**
     * Update course by id.
     *
     * @param int id
     * @param {Course} course
     * @return Promise<boolean>
     */
    async updateById(id, course) {
        try {
            const endpoint = `${this.path}/${id}/update`;
            const courseData = CourseMapper.toObject(course);
            await request.post(endpoint, { _method: 'PATCH', ...courseData}, {
                headers: {...this.headers}
            });

            return true;
        } catch (error) {
            console.error(`Error updating with participant ID ${id}:`, error);

            throw error;
        }
    }

    /**
     * Delete course by id.
     *
     * @param {Number} id
     * @return Promise<boolean>
     */
    async deleteById(id) {
        try {
            const endpoint = `${this.path}/${id}/delete`;
            await request.delete(endpoint);

            return true;
        } catch (error) {
            console.error(`Error deleteing course with ID ${id}:`, error);

            throw error;
        }
    };
}

export default CourseService;

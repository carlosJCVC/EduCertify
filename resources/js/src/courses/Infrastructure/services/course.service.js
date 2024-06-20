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
    async getAll() {
        try {
            const endpoint = `${this.path}/json`;
            const { data: { data:response } } = await request.get(endpoint);
            const courses = response.map((data) => CourseMapper.fromJson(data));

            return courses;
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
            const endpoint = `${this.path}/${id}/show-in-json`;
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
            await request.post(endpoint, { _method: 'PATCH', ...courseData }, {
                headers: { ...this.headers }
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

    /**
     * Send certificate by course id
     *
     * @param {Number} id
     * @param {Number} courseid
     * @return Promise<Bool> true|falsee
     */
    async sendCertificateAllParticipants(id) {
        try {
            const endpoint = `${this.path}/${id}/certificates/send-participants`;
            const { data: { data } } = await request.post(endpoint, {
                headers: this.headers
            });

            return true;
        } catch (error) {
            console.error(`Error sending certificate with ID ${id}:`, error);

            throw error;
        }
    }

    /**
     * Delete participant by id.
     *
     * @param {Number} id
     * @param <Array> data
     * @return Promise<boolean>
     */
    async enrollById(id, participantIds) {
        alert();
        try {
            const endpoint = `${this.path}/${id}/enroll/store`;
            await axios.post(endpoint, { participants_ids: participantIds }, {
                headers: this.headers
            });

            return true;
        } catch (error) {
            console.error(`Error enrolling participant with ID ${id}:`, error);

            throw error;
        }
    };

    /**
     * Delete participant by id.
     *
     * @param {Number} id
     * @param <Array> data
     * @return Promise<boolean>
     */
    async unenrollById(id, participantid) {
        try {
            const endpoint = `${this.path}/${id}/unenroll/${participantid}/delete`;
            await axios.delete(endpoint, {
                headers: this.headers
            });

            return true;
        } catch (error) {
            console.error(`Error unenrolling participant with ID ${id}:`, error);

            if (error.response) {
                return false;
            }

            throw error;
        }
    };
}

export default CourseService;

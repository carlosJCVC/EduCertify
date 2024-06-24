import request from "@/src/utils/request";

class PreferenceService {

    constructor() {
        this.path = '/admin/courses';
        this.headers = { 'Content-Type': 'multipart/form-data' };
    }

    /**
     * Update course by id.
     *
     * @param int id
     * @param {Course} course
     * @return Promise<boolean>
     */
    async updateByCourseId(id, preferencesData) {
        try {
            const endpoint = `${this.path}/${id}/preferences/update`;
            await request.post(endpoint, { _method: 'PATCH', ...preferencesData }, {
                headers: { ...this.headers }
            });

            return true;
        } catch (error) {
            console.error(`Error updating preferences for with course ID ${id}:`, error);

            throw error;
        }
    }
}

export default PreferenceService;

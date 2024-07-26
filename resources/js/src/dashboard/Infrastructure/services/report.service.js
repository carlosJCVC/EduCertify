import request from "@/src/utils/request";

class ReportService {

    constructor() {
        this.path = '/admin/reports';
        this.headers = { 'Content-Type': 'multipart/form-data' };
    }

    /**
     * Get All Records
     * @return Promise<Array<userStatus>> records
     */
    async getAllUserStatus() {
        try {
            const endpoint = `${this.path}/get-user-status`;
            const { data } = await request.get(endpoint);

            return data;
        } catch (error) {
            console.error('Error getting user status:', error);

            throw error;
        }
    }

    /**
     * Get All Records
     * @return Promise<Array<userStatus>> records
     */
    async getAllCoursesCategory() {
        try {
            const endpoint = `${this.path}/get-courses-category`;
            const { data } = await request.get(endpoint);

            return data;
        } catch (error) {
            console.error('Error getting courses category:', error);

            throw error;
        }
    }
    
}

export default ReportService;

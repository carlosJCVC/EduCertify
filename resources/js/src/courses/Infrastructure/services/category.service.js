import request from "@/src/utils/request";

class CategoryService {
    constructor() {
        this.path = '/admin/categories';
    }

    /**
     * Get All Records
     * @return Promise<Array<String>> records
     */
    async getAll() {
        try {
            const endpoint = `${this.path}/json`;
            const response = await request.get(endpoint);
            const { data: { data } } = response;

            return data
        } catch (error) {
            console.error('Error getting categories:', error);

            throw error;
        }
    }
}

export default CategoryService;

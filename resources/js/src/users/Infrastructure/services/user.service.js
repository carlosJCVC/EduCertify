import request from "@/src/utils/request";
import UserMapper from "../../Domain/mappers/user.mapper";

class UserService {

    constructor() {
        this.path = '/admin/users';
    }

    /**
     * Get All Records
     * @return Promise<Array<User>> records
     */
    async getAll(data, callback, settings) {
        try {
            const endpoint = `${this.path}/json`;
            const response = await request.get(endpoint);

            // console.log(response.data)

            callback(response.data.data);
        } catch (error) {
            console.error('Error getting users:', error);

            throw error;
        }
    }

    /**
     * Get records by id
     *
     * @param {Number} $id
     * @return Promise<User> user
     */
    async findById(id) {
        try {
            const endpoint = `${this.path}/${id}/show`;
            const { data: { data } } = await request.get(endpoint);

            const user = UserMapper.fromJson(data);

            return user;
        } catch (error) {
            console.error(`Error getting user with ID ${id}:`, error);
 
            throw error;
        }
    }

    /**
     * Create a model.
     *
     * @param {FormData} formData
     * @return Promise<User>
     */
    async create(formData) {
        try {
            const endpoint = `${this.path}/store`;
            const { data: { data } } = await request.post(endpoint, formData);

            const user = UserMapper.fromJson(data);

            return user;
        } catch (error) {
            console.error('Error creating user:', error);

            throw error;
        }
    }

    /**
     * Update user by id.
     *
     * @param int id
     * @param {FormData} data
     * @return Promise<boolean>
     */
    async updateById(id, data) {
        try {
            const endpoint = `${this.path}/${id}/update`;
            await request.patch(endpoint, data);

            return true;
        } catch (error) {
            console.error(`Error updating with user ID ${id}:`, error);

            throw error;
        }        
    }

    /**
     * Delete user by id.
     *
     * @param {Number} id
     * @return Promise<boolean>
     */
    async deleteById(id) {
        try {
            const endpoint = `${this.path}/${id}/delete`;
            await axios.delete(endpoint);

            return true;
        } catch (error) {
            console.error(`Error deleteing user with ID ${id}:`, error);

            throw error;
        }
    };
}

export default UserService;

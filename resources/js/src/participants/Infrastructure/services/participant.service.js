import request from "@/src/utils/request";
import ParticipantMapper from "../../Domain/mappers/participant.mapper";

class ParticipantService {

    constructor() {
        this.path = '/admin/participants';
        this.headers = { 'Content-Type': 'multipart/form-data' };
    }

    /**
     * Get All Records
     * @return Promise<Array<Participant>> records
     */
    async getAll(data, callback, settings) {
        try {
            const endpoint = `${this.path}/json`;
            const response = await request.get(endpoint);

            // console.log(response.data)

            callback(response.data.data);
        } catch (error) {
            console.error('Error getting participants:', error);

            throw error;
        }
    }

    /**
     * Get records by id
     *
     * @param {Number} $id
     * @return Promise<Participant> participant
     */
    async findById(id) {
        try {
            const endpoint = `${this.path}/${id}/show`;
            const { data: { data } } = await request.get(endpoint);

            const participant = ParticipantMapper.fromJson(data);

            return participant;
        } catch (error) {
            console.error(`Error getting participant with ID ${id}:`, error);

            throw error;
        }
    }

    /**
     * Create a model.
     *
     * @param {Participant} participant
     * @return Promise<Participant>
     */
    async create(formData) {
        try {
            const endpoint = `${this.path}/store`;
            const participantData = ParticipantMapper.toObject(formData);
            const { data: { data } } = await request.post(endpoint, participantData, {
                headers: this.headers
            });

            const participant = ParticipantMapper.fromJson(data);

            return participant;
        } catch (error) {
            console.error('Error creating participant:', error);

            throw error;
        }
    }

    /**
     * Update participant by id.
     *
     * @param int id
     * @param {Participant} participant
     * @return Promise<boolean>
     */
    async updateById(id, participant) {
        try {
            const endpoint = `${this.path}/${id}/update`;
            const participantData = ParticipantMapper.toObject(participant);
            await request.post(endpoint, { _method: 'PATCH', ...participantData}, {
                headers: {...this.headers}
            });

            return true;
        } catch (error) {
            console.error(`Error updating with participant ID ${id}:`, error);

            throw error;
        }
    }

    /**
     * Delete participant by id.
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
            console.error(`Error deleteing participant with ID ${id}:`, error);

            throw error;
        }
    };
}

export default ParticipantService;

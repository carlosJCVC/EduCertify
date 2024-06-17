import request from "@/src/utils/request";
import SpeakerMapper from "../../Domain/mappers/speaker.mapper";

class SpeakerService {

    constructor() {
        this.path = '/admin/speakers';
        this.headers = { 'Content-Type': 'multipart/form-data' };
    }

    /**
     * Get All Records
     * @return Promise<Array<Speaker>> records
     */
    async getAll() {
        const speakers = [];
        try {
            const endpoint = `${this.path}/json`;
            const { data: { data } } = await request.get(endpoint);

            data.forEach(
                async (data) => {
                    const speaker = SpeakerMapper.fromJson(data);
                    speakers.push(speaker)
                }
            )
            return speakers;
        } catch (error) {
            console.error('Error getting speakers:', error);

            throw error;
        }
    }

    /**
     * Get records by id
     *
     * @param {Number} $id
     * @return Promise<Speaker> speaker
     */
    async findById(id) {
        try {
            const endpoint = `${this.path}/${id}/show-in-json`;
            const { data: { data } } = await request.get(endpoint);

            const speaker = SpeakerMapper.fromJson(data);

            return speaker;
        } catch (error) {
            console.error(`Error getting speaker with ID ${id}:`, error);

            throw error;
        }
    }

    /**
     * Create a model.
     *
     * @param {Speaker} speaker
     * @return Promise<Speaker>
     */
    async create(formData) {
        try {
            const endpoint = `${this.path}/store`;
            const speakerData = SpeakerMapper.toObject(formData);
            const { data: { data } } = await request.post(endpoint, speakerData, {
                headers: this.headers
            });

            const speaker = SpeakerMapper.fromJson(data);

            return speaker;
        } catch (error) {
            console.error('Error creating speaker:', error);

            throw error;
        }
    }

    /**
     * Update speaker by id.
     *
     * @param int id
     * @param {Speaker} speaker
     * @return Promise<boolean>
     */
    async updateById(id, speaker) {
        try {
            const endpoint = `${this.path}/${id}/update`;
            const speakerData = SpeakerMapper.toObject(speaker);
            await request.post(endpoint, { _method: 'PATCH', ...speakerData }, {
                headers: { ...this.headers }
            });

            return true;
        } catch (error) {
            console.error(`Error updating with speaker ID ${id}:`, error);

            throw error;
        }
    }

    /**
     * Delete speaker by id.
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
            console.error(`Error deleteing speaker with ID ${id}:`, error);

            throw error;
        }
    };
}

export default SpeakerService;

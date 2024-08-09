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
    async getAll() {
        try {
            const endpoint = `${this.path}/json`;
            const { data: { data:response } } = await request.get(endpoint);
            const courses = response.map((data) => ParticipantMapper.fromJson(data));

            return courses;
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
            await request.post(endpoint, { _method: 'PATCH', ...participantData }, {
                headers: { ...this.headers }
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

    /**
     * Delete photo of participant by id.
     *
     * @param {Number} id
     * @return Promise<boolean>
     */
    async deletePhotoToParticipantById(id) {
        try {
            const endpoint = `${this.path}/${id}/remove-avatar`;
            await axios.delete(endpoint);

            return true;
        } catch (error) {
            console.error(`Error deleteing photo of the participant with ID ${id}:`, error);

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
    async sendCertificateById(id, courseid) {
        try {
            const endpoint = `${this.path}/${id}/certificates/send`;
            const { data: { data } } = await request.post(endpoint, { courseid }, {
                headers: this.headers
            });
            await this.create_send_certificate(id, courseid)
            return true;
        } catch (error) {
            console.error(`Error sending certificate with ID ${id}:`, error);

            throw error;
        }
    }
    /**
     * Send certificate by course id
     *
     * @param {Number} id
     * @param {Number} courseid
     * @return Promise<Bool> true|falsee
     */
    async sendAllCertificatesById(id) {
        try {
            const endpoint = `${this.path}/${id}/certificates/send-all`;
            const { data: { data } } = await request.post(endpoint, {
                headers: this.headers
            });
            await this.create_send_certificates( id )
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
    async enrollById(id, courseIds) {
        try {
            const endpoint = `${this.path}/${id}/enroll/store`;
            await axios.post(endpoint, { courses_ids: courseIds }, {
                headers: this.headers
            });

            return true;
        } catch (error) {
            console.error(`Error enrolling course with ID ${id}:`, error);

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
    async unenrollById(id, courseid) {
        try {
            const endpoint = `${this.path}/${id}/unenroll/${courseid}/delete`;
            await axios.delete(endpoint, {
                headers: this.headers
            });

            return true;
        } catch (error) {
            console.error(`Error unenrolling course with ID ${id}:`, error);

            if (error.response) {
                return false;
            }

            throw error;
        }
    };

    /**
     * Create a model certificate.
     *
     * @param {Participant} participant
     * @return Promise<Participant>
     */
    async create_send_certificate(participantId, courseId) {
        try {
            const endpoint = `/admin/certificates/store-send-certificate`;
            const sendCertificateData = {
                participant_id: participantId,
                course_id: courseId
            };
            const { data: { data } } = await request.post(endpoint, sendCertificateData, {
                headers: this.headers
            });
            return true;
        } catch (error) {
            console.error('Error creating participant:', error);
            throw error;
        }
    }

    /**
     * Create a model certificate.
     *
     * @param {Participant} participant
     * @return Promise<Participant>
     */
    async create_send_certificates(Id) {
        try {
            const endpoint = `/admin/certificates/store-send-certificate`;
            const sendCertificateData = {
                participant_id: Id
            };
            const { data: { data } } = await request.post(endpoint, sendCertificateData, {
                headers: this.headers
            });
            return true;
        } catch (error) {
            console.error('Error creating certificate:', error);
            throw error;
        }
    }
}

export default ParticipantService;

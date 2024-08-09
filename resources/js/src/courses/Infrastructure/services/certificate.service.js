import request from "@/src/utils/request";

class CertificateService {
    constructor() {
        this.path = '/admin/courses';
        this.headers = { 'Content-Type': 'multipart/form-data' };
    }

    /**
     * Download certificate by course id
     *
     * @param {Number} courseid
     * @return Promise<Bool> true|false
     */
    async downloadCertificate(courseid, preferenceData) {
        try {
            const endpoint = `${this.path}/${courseid}/certificates/download-certificate`;
            const { data } = await request.post(endpoint, preferenceData, {
                responseType: 'blob',
                headers: this.headers
            });

            const url = window.URL.createObjectURL(new Blob([data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'certificate-preview.pdf');
            document.body.appendChild(link);
            link.click();

            return true;
        } catch (error) {
            console.error(`Error downloading course certificate with ID ${id}:`, error);

            throw error;
        }
    }

    /**
     * Previw certificate
     *
     * @param {Setting} settings
     * @return Promise<Bool> true|false
     */
    async previewCertificate(settings) {
        try {
            const endpoint = `admin/settings/certificates/preview`;
            const { data } = await request.post(endpoint, settings, {
                responseType: 'blob',
                headers: this.headers
            });

            const url = window.URL.createObjectURL(new Blob([data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'certificate-preview.pdf');
            document.body.appendChild(link);
            link.click();

            return true;
        } catch (error) {
            console.error(`Error downloading certificate with ID ${id}:`, error);

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
    async sendCertificateToAllParticipants(id) {
        try {
            const endpoint = `${this.path}/${id}/certificates/send-participants`;
            const { data: { data } } = await request.post(endpoint, {
                headers: this.headers
            });
            const certificate = await this.create_send_certificates(id);
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
    async sendCertificateToParticipant(id, courseid) {
        try {
            const endpoint = `${this.path}/${id}/certificates/send`;
            const { data: { data } } = await request.post(endpoint, { courseid }, {
                headers: this.headers
            });
            const certificate = await this.create_send_certificate(id, courseid);
            return true;
        } catch (error) {
            console.error(`Error sending certificate with ID ${id}:`, error);

            throw error;
        }
    }

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
                course_id: Id
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

export default CertificateService;

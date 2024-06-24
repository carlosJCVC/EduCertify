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

            return true;
        } catch (error) {
            console.error(`Error sending certificate with ID ${id}:`, error);

            throw error;
        }
    }
}

export default CertificateService;

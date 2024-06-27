import courseStore from "../../../courses/Infrastructure/store/course.store";
import settingStore from "../../Infrastructure/store/setting.store";

/**
 * Function to update course 
 * @return Promise<bool>
 */
export const previewCertificate = async () => {
    try {
        const service = courseStore.getCertificateService();
        const settings = settingStore.getSettings();

        settings.update();

        await service.previewCertificate(settings);

        return true;
    } catch (error) {
        throw error;
    }
}

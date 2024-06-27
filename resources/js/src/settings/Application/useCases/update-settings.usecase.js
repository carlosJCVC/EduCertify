import { loadingAlert, notifyAlert } from "../../../utils/alerts";
import settingStore from "../../Infrastructure/store/setting.store";
import { getSettingFormValidation } from "../../Presentation/validators/settings.validator";
import { Validator } from "../../config/validators";

/**
 * Function to update course
 * @param int id 
 * @return Course course 
 */
export const updateSettings = async (id) => {
    try {
        const fv = getSettingFormValidation();
        const status = await fv.validate();
        
        if (status == Validator.ValidForm) {
            const service = settingStore.getSettingService();

            loadingAlert();

            await service.update();

            notifyAlert('Success!', 'Settings has been updated successfully!', () => {
                location.reload();
            })
        }

        return true;
    } catch (error) {
        throw error;
    }
}

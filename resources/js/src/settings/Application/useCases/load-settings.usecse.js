import settingStore from "../../Infrastructure/store/setting.store"
import { setSettingsFormValues } from "../../Presentation/utils/setting-form.utils"

/**
 * FUnction to load settings a set values
 */
export const loadCertificateSettings = async () => {
    const service = settingStore.getSettingService();
    const settings = await service.getAll();

    setSettingsFormValues(settings)
}
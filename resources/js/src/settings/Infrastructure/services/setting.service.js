import request from "@/src/utils/request";
import SettingMapper from "../../Domain/mappers/setting.mapper";
import settingStore from "../store/setting.store";

class SettingService {

    constructor() {
        this.path = '/admin/settings';
        this.headers = { 'Content-Type': 'multipart/form-data' };
    }

    /**
     * Get Settings
     * @return Promise<Setting> settings
     */
    async getAll() {
        try {
            const endpoint = `${this.path}/show`;
            const { data: { data:response } } = await request.get(endpoint);

            const setting = SettingMapper.fromJson(response);

            return setting;
        } catch (error) {
            console.error('Error getting settings:', error);

            throw error;
        }
    }

    /**
     * Update settings.
     *
     * @return Promise<boolean>
     */
    async update() {
        const settings = settingStore.getSettings();
        settings.update();

        try {
            const endpoint = `${this.path}/update`;
            await request.post(endpoint, { _method: 'PATCH', ...settings }, {
                headers: { ...this.headers }
            });

            return true;
        } catch (error) {
            console.error(`Error updating with settings.`, error);

            throw error;
        }
    }
}

export default SettingService;

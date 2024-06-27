import SettingService from "../services/setting.service";

const state = {
    settings: [],
    settingService: new SettingService(),
    settings: undefined,
}

const initStore = async () => {
    await loadStore();
    console.log('InitStore 🥑');
}

const loadStore = async () => {
    const settings = await state.settingService.getAll();
    state.settings = settings;
}

/**
 * Function to get setting service 
 * @param {SettingService} settingService 
 */
const getSettingService = () => {
    return state.settingService;
}

/**
 * Function to get settings 
 * @param {Setting} settings 
 */
const getSettings = () => {
    return state.settings;
}

export default {
    initStore,
    getSettingService,
    getSettings,
}

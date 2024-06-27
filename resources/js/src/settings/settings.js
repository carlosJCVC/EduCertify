import { renderSettingEvents } from './Application/events/settings-events';
import { loadCertificateSettings } from './Application/useCases/load-settings.usecse';
import settingStore from './Infrastructure/store/setting.store';
import { includeConfigToFields } from './Presentation/utils/include-config-to-fields-utils';
// import { listSpeakersUsingDataTable } from './Apllication/useCases/list-speakers.usecase';
import "/resources/sass/custom-inputs.scss";

const SettingsApp = () => {
    settingStore.initStore();

    (() => {
        includeConfigToFields();
        loadCertificateSettings();
    })();

    renderSettingEvents();
}

SettingsApp()

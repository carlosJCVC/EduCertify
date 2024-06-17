import { renderListSpeakerEvents } from './Apllication/events/speakers-events';
import { listSpeakersUsingDataTable } from './Apllication/useCases/list-speakers.usecase';
import "/resources/sass/custom-inputs.scss";

const ListSpeakerApp = () => {
    (() => {
        listSpeakersUsingDataTable();
    })();

    renderListSpeakerEvents();
}

ListSpeakerApp()

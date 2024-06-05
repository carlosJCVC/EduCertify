import { renderParticipantEvents } from './Application/events/participant-events';
import { listParticipantsUsingDataTable } from './Application/useCases/list-participant.usecase';
import participantStore from './Infrastructure/store/participant.store';

const ListParticipantApp = () => {
    participantStore.initStore();

    (() => {
        listParticipantsUsingDataTable();
    })();

    renderParticipantEvents();
}

ListParticipantApp()

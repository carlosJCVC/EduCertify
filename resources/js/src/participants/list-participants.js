import { renderListParticipantEvents } from './Application/events/participant-events';
import { listParticipantsUsingDataTable } from './Application/useCases/list-participant.usecase';

const ListParticipantApp = () => {
    (() => {
        listParticipantsUsingDataTable();
    })();

    renderListParticipantEvents();
}

ListParticipantApp()

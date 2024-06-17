import { renderListParticipantEvents } from './Application/events/participant-events';
import { listParticipantsUsingDataTable } from './Application/useCases/list-participant.usecase';
import "/resources/sass/custom-inputs.scss";

const ListParticipantApp = () => {
    (() => {
        listParticipantsUsingDataTable();
    })();

    renderListParticipantEvents();
}

ListParticipantApp()

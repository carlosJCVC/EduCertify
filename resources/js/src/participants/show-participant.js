import { listCoursesByParticipantUsingDataTable } from './Application/useCases/list-course-by-participant.usecase';
import { renderListParticipantEvents, renderShowParticipantEvents } from './Application/events/participant-events';
import participantStore from './Infrastructure/store/participant.store';
import "/resources/sass/custom-inputs.scss";

const ShowParticipantApp = () => {
    participantStore.initStore();
    
    
    (() => {
        listCoursesByParticipantUsingDataTable()
    })();
    
    renderListParticipantEvents();
    renderShowParticipantEvents();
}

ShowParticipantApp()


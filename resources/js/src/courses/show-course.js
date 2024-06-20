import "/resources/sass/custom-inputs.scss";
import courseStore from './Infrastructure/store/course.store';
import { listParticipantInCourseUsingDataTable } from "./Application/useCases/list-participant-by-course.usecase";
import { renderCoursesEvents, renderShowCourseEvents } from "./Application/events/course-events";

const ShowCourseApp = () => {
    courseStore.initStore();
    
    
    (() => {
        listParticipantInCourseUsingDataTable()
    })();

    
    renderShowCourseEvents();
    renderCoursesEvents()
}

ShowCourseApp()


import "/resources/sass/custom-inputs.scss";
import courseStore from './Infrastructure/store/course.store';
import { listParticipantInCourseUsingDataTable } from "./Application/useCases/list-participant-by-course.usecase";
import { renderCoursesEvents, renderShowCourseEvents } from "./Application/events/course-events";
import { includeConfigToPreferencesFields } from "./Presentation/utils/include-config-to-fields.utils";


const ShowCourseApp = () => {
    courseStore.initStore();

    (() => {
        includeConfigToPreferencesFields()
        listParticipantInCourseUsingDataTable()
    })();

    renderShowCourseEvents();
    renderCoursesEvents()
}

ShowCourseApp()


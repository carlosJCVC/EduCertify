import "/resources/sass/custom-inputs.scss";
import courseStore from './Infrastructure/store/course.store';
import { listParticipantInCourseUsingDataTable } from "./Application/useCases/list-participant-by-course.usecase";
import { renderCoursesEvents, renderShowCourseEvents } from "./Application/events/course-events";
import { includePickrToFields } from "./Presentation/utils/include-pickr-to-fields.utils";
import { includeSignatureToFields } from "./Presentation/utils/include-signature-to-fields.utls";
import { includeDropifyToFields } from "./Presentation/utils/include-dropify-to-fields-utils";


const ShowCourseApp = () => {
    courseStore.initStore();

    (() => {
        listParticipantInCourseUsingDataTable()
    })();

    renderShowCourseEvents();
    renderCoursesEvents()

    includePickrToFields()
    includeDropifyToFields()
    includeSignatureToFields()
}

ShowCourseApp()


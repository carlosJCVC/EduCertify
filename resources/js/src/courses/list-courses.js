import { renderCoursesEvents } from "./Application/events/course-events";
import { listCoursesUsingDataTable } from "./Application/useCases/list-course.usecase";
import courseStore from "./Infrastructure/store/course.store";
import "/resources/sass/custom-inputs.scss";

const ListCourseApp = () => {
    (() => {
        listCoursesUsingDataTable();
    })();

    renderCoursesEvents();
}

ListCourseApp()

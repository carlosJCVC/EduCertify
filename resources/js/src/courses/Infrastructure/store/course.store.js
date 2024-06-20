import CategoryService from "../services/category.service";
import CourseService from "../services/course.service";

export const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    courses: [],
    courseSelected: undefined,
    courseService: new CourseService(),
    categoryService: new CategoryService(),
    datatable: undefined,
    filter: Filters.All,
}


const initStore = async () => {
    await loadStore();
    console.log('InitStore 🥑');
}

const loadStore = async () => {
    // if( !localStorage.getItem('state') ) return;

    // const { users = [], filter = Filters.All } = JSON.parse( localStorage.getItem('state') );
    // state.users = users;
    // state.filter = filter;
    // const service = new CourseService();
    // setCourseService(service)

    const courseId = document.querySelector('.course-info-card').getAttribute('data-courseid');
    const course = await state.courseService.findById(courseId);
    setCourseSelected(course)
}

const saveStateToLocalStorage = () => {
    // localStorage.setItem('state', JSON.stringify(state) );
}


const getCourses = (filter = Filters.All) => {

}

/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {

}

/**
 * Function to save course selected 
 * @param {Course} course 
 */
const setCourseSelected = (course) => {
    if (!course) throw new Error('Course is required');

    state.courseSelected = course;
}

/**
 * Function to save course service 
 * @param {CourseServcie} courseService 
 */
const setCourseService = (courseService) => {
    if (!courseService) throw new Error('Course Service is required');

    if (!state.courseService) {
        state.courseService = courseService;
    }
}

/**
 * Function to get course selected 
 * @param {Course} course 
 */
const getCourseSelected = () => {
    return state.courseSelected;
}

/**
 * Function to get course selected 
 * @param {CourseService} courseService 
 */
const getCourseService = () => {
    return state.courseService;
}

/**
 * Function to get category selected 
 * @param {CategoryService} categoryService 
 */
const getCategoryService = () => {
    return state.categoryService;
}

/**
 * Function to save course datatable 
 * @param {DataTable} datatable 
 */
const setCourseDatatable = (datatable) => {
    if (!datatable) throw new Error('Datatable is required');

    state.datatable = datatable;
}

/**
 * Function to get datatable 
 * @param {DataTable} datatable 
 */
const getCourseDatatable = () => {
    return state.datatable;
}
/**
 * Function to save courses enrolled to participant 
 * @param {DataTable} datatable 
 */
const setParticipatnsEnrolledDatatable = (datatable) => {
    if (!datatable) throw new Error('Datatable is required');

    state.participantsEnrolledDatatable = datatable;
}

/**
 * Function to get course selected 
 * @param {Course} course 
 */
const resetCourseSelected = () => {
    return state.courseSelected = undefined;
}

const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId);
    saveStateToLocalStorage();
}

const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => !todo.done);
    saveStateToLocalStorage();
}
/**
 * Function to get courses enrolled to participant
 * @param {DataTable} datatable 
 */
const getParticipantsEnrolledDatatable = () => {
    return state.participantsEnrolledDatatable;
}

/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;
    saveStateToLocalStorage();
}

const getCurrentFilter = () => {
    return state.filter;
}


export default {
    addTodo,
    // deleteCompleted,
    // deleteTodo,
    // getCurrentFilter,
    // getTodos,
    initStore,
    setCourseSelected,
    getCourseSelected,
    setCourseDatatable,
    getCourseService,
    setCourseService,
    getCategoryService,
    getCourseDatatable,
    resetCourseSelected,
    setParticipatnsEnrolledDatatable,
    getParticipantsEnrolledDatatable,
    // loadStore,
    // setFilter,
    // toggleTodo,
}
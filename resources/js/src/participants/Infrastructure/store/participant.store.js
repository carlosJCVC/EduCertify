export const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    participants: [],
    participantSelected: undefined,
    datatable: undefined,
    filter: Filters.All,
}


const initStore = () => {
    loadStore();
    console.log('InitStore 🥑');
}

const loadStore = () => {
    // if( !localStorage.getItem('state') ) return;

    // const { users = [], filter = Filters.All } = JSON.parse( localStorage.getItem('state') );
    // state.users = users;
    // state.filter = filter;
}

const saveStateToLocalStorage = () => {
    // localStorage.setItem('state', JSON.stringify(state) );
}


const getParticipants = (filter = Filters.All) => {

    switch (filter) {
        case Filters.All:
            return [...state.participants];

        case Filters.Completed:
            return state.participants.filter(participant => participant.done);

        case Filters.Pending:
            return state.participants.filter(participant => !participant.done);

        default:
            throw new Error(`Option ${filter} is not valid.`);
    }
}

/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {
    if (!description) throw new Error('Description is required');
    state.todos.push(new Todo(description));

    saveStateToLocalStorage();
}

/**
 * Function to save participant selected 
 * @param {Participant} participant 
 */
const setParticipantSelected = (participant) => {
    if (!participant) throw new Error('Participant is required');

    state.participantSelected = participant;
}

/**
 * Function to get participant selected 
 * @param {Participant} participant 
 */
const getParticipantSelected = () => {
    return state.participantSelected;
}

/**
 * Function to save participant datatable 
 * @param {DataTable} datatable 
 */
const setParticipantDatatable = (datatable) => {
    if (!datatable) throw new Error('Datatable is required');

    state.datatable = datatable;
}

/**
 * Function to get datatable 
 * @param {DataTable} datatable 
 */
const getParticipantDatatable = () => {
    return state.datatable;
}

/**
 * Function to get participant selected 
 * @param {Participant} participant 
 */
const resetParticipantSelected = () => {
    return state.participantSelected == undefined;
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
    setParticipantSelected,
    getParticipantSelected,
    setParticipantDatatable,
    getParticipantDatatable,
    resetParticipantSelected,
    // loadStore,
    // setFilter,
    // toggleTodo,
}
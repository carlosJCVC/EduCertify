export const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    users: [],
    userSelected: undefined,
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


const getUsers = (filter = Filters.All) => {

    switch (filter) {
        case Filters.All:
            return [...state.users];

        case Filters.Completed:
            return state.users.filter(user => user.done);

        case Filters.Pending:
            return state.users.filter(user => !user.done);

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
 * Function to save user selected 
 * @param {User} user 
 */
const setUserSelected = (user) => {
    if (!user) throw new Error('User is required');

    state.userSelected = user;
}

/**
 * Function to get user selected 
 * @param {User} user 
 */
const getUserSelected = () => {
    return state.userSelected;
}

/**
 * Function to save user datatable 
 * @param {DataTable} datatable 
 */
const setUserDatatable = (datatable) => {
    if (!datatable) throw new Error('Datatable is required');

    state.datatable = datatable;
}

/**
 * Function to get datatable 
 * @param {DataTable} datatable 
 */
const getUserDatatable = () => {
    return state.datatable;
}

/**
 * Function to get user selected 
 * @param {User} user 
 */
const resetUserSelected = () => {
    return state.userSelected == undefined;
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
    setUserSelected,
    getUserSelected,
    setUserDatatable,
    getUserDatatable,
    resetUserSelected,
    // loadStore,
    // setFilter,
    // toggleTodo,
}
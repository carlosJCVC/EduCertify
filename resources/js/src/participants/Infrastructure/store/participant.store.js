import ParticipantService from "../services/participant.service";

export const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    participants: [],
    participantSelected: undefined,
    participantService: new ParticipantService(),
    datatable: undefined,
    coursesEnrolledDatatable: undefined,
    filter: Filters.All,
}


const initStore = async () => {
    await loadStore();
    console.log('InitStore 🥑');
}

const loadStore = async () => {
    const participantId = document.querySelector('.participant-info-card').getAttribute('data-participantid');
    const participant = await state.participantService.findById(participantId);

    setParticipantSelected(participant)
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
 * Function to get participant service 
 * @param {Service} service 
 */
const getParticipantService = () => {
    return state.participantService;
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
 * Function to save courses enrolled to participant 
 * @param {DataTable} datatable 
 */
const setCoursesEnrolledDatatable = (datatable) => {
    if (!datatable) throw new Error('Datatable is required');

    state.coursesEnrolledDatatable = datatable;
}

/**
 * Function to get courses enrolled to participant
 * @param {DataTable} datatable 
 */
const getCoursesEnrolledDatatable = () => {
    return state.coursesEnrolledDatatable;
}

/**
 * Function to get participant selected 
 * @param {Participant} participant 
 */
const resetParticipantSelected = () => {
    return state.participantSelected == undefined;
}

export default {
    initStore,
    setParticipantSelected,
    getParticipantSelected,
    getParticipantService,
    setParticipantDatatable,
    getParticipantDatatable,
    resetParticipantSelected,

    /**
     * enrolled courses datatable
     */
    setCoursesEnrolledDatatable,
    getCoursesEnrolledDatatable
}
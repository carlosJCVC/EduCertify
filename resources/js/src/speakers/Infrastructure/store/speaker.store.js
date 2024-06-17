import SpeakerService from "../services/speaker.service";
import ExpertiseService from "../services/expertise.service";


const state = {
    speakers: [],
    speakerSelected: undefined,
    speakerService: new SpeakerService(),
    expertiseService: new ExpertiseService(),
    datatable: undefined,
}


const initStore = async () => {
    await loadStore();
    console.log('InitStore 🥑');
}

const loadStore = async () => {
    const speakerId = document.querySelector('.speaker-info-card').getAttribute('data-speakerid');
    const speaker = await state.speakerService.findById(speakerId);

    setSpeakerSelected(speaker)
}

const getSpeakers = () => {
    // 
}

/**
 * Function to save speaker selected 
 * @param {Speaker} speaker 
 */
const setSpeakerSelected = (speaker) => {
    if (!speaker) throw new Error('Speaker is required');

    state.speakerSelected = speaker;
}

/**
 * Function to get speaker selected 
 * @param {Speaker} speaker 
 */
const getSpeakerSelected = () => {
    return state.speakerSelected;
}

/**
 * Function to get speaker service 
 * @param {Service} service 
 */
const getSpeakerService = () => {
    return state.speakerService;
}
/**
 * Function to get category selected 
 * @param {ExpertiseService} expertiseService 
 */
const getExpertiseService = () => {
    return state.expertiseService;
}

/**
 * Function to save speaker datatable 
 * @param {DataTable} datatable 
 */
const setSpeakerDatatable = (datatable) => {
    if (!datatable) throw new Error('Datatable is required');

    state.datatable = datatable;
}

/**
 * Function to get datatable 
 * @param {DataTable} datatable 
 */
const getSpeakerDatatable = () => {
    return state.datatable;
}

/**
 * Function to get speaker selected 
 * @param {Speaker} speaker 
 */
const resetSpeakerSelected = () => {
    return state.speakerSelected == undefined;
}

export default {
    initStore,
    setSpeakerSelected,
    getSpeakerSelected,
    getSpeakerService,
    setSpeakerDatatable,
    getSpeakerDatatable,
    resetSpeakerSelected,
    getExpertiseService,
}
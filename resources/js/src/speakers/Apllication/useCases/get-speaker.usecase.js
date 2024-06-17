import speakerStore from "../../Infrastructure/store/speaker.store";

/**
 * Function to get speaker
 * @param {int} id
 * @return Speaker speaker 
 */
export const getSpeaker = async (id) => {
    if (!id)
        throw new Error('Argument :id is required');

    try {
        const service = speakerStore.getSpeakerService();
        const speaker = await service.findById(id);
        speakerStore.setSpeakerSelected(speaker);

        return speaker;
    } catch (error) {
        throw error;
    }
}
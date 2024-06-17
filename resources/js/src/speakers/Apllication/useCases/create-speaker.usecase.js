import { loadingAlert, notifyAlert } from "../../../utils/alerts";
import { Validator } from "../../config/validator";
import SpeakerMapper from "../../Domain/mappers/speaker.mapper";
import SpeakerService from "../../Infrastructure/services/speaker.service";
import speakerStore from "../../Infrastructure/store/speaker.store";
import { getSpeakerFormValues } from "../../Presentation/utils/speaker-form.utils";
import { getSpeakerModal } from "../../Presentation/utils/speaker-modal.utils";
import { getSpeakerFormValidation } from "../../Presentation/validators/speaker-validator";

const speakerService = new SpeakerService();

/**
 * Function to create speaker
 * @param {FormData} data 
 * @return Speaker speaker 
*/
export const createSpeaker = async (formData) => {
    try {
        const modal = getSpeakerModal();
        const datatable = speakerStore.getSpeakerDatatable();
        const fv = getSpeakerFormValidation();
        const status = await fv.validate();

        if (status == Validator.ValidForm) {
            const speakerData = getSpeakerFormValues();
            const speaker = SpeakerMapper.fromFormData(speakerData);
    
            loadingAlert();
            const newSpeaker = await speakerService.create(speaker);
            modal.hide();

            notifyAlert('Success!', 'Speaker has been created successfully!', () => {
                datatable.ajax.reload();
            })

            return newSpeaker;
        }
    } catch (error) {
        throw error;
    }
}

import { getParticipantModal } from "../../Presentation/utils/participant-modal.utils";
import { getParticipantFormValues } from "../../Presentation/utils/participant-form.utils";
import { loadingAlert, notifyAlert } from "../../../utils/alerts";
import { Validator } from "../../config/validator";
import participantStore from "../../Infrastructure/store/participant.store";
import ParticipantService from "../../Infrastructure/services/participant.service";
import ParticipantMapper from "../../Domain/mappers/participant.mapper";
import { getParticipantFormValidation } from "../../Presentation/validators/participant-validator";

const participantService = new ParticipantService();

/**
 * Function to create participant
 * @param {FormData} data 
 * @return Participant participant 
*/
export const createParticipant = async (formData) => {    
    try {
        const modal = getParticipantModal();
        const datatable = participantStore.getParticipantDatatable();
        const fv = getParticipantFormValidation();
        const status = await fv.validate();

        if (status == Validator.ValidForm) {
            const participantData = getParticipantFormValues();
            const participant = ParticipantMapper.fromFormData(participantData);
    
            loadingAlert();
            const newParticipant = await participantService.create(participant);
            modal.hide();

            notifyAlert('Success!', 'Participant has been created successfully!', () => {
                datatable.ajax.reload();
            })

            return newParticipant;
        }
    } catch (error) {
        throw error;
    }
}

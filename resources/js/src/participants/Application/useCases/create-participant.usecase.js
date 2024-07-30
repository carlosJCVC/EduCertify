import { getImportParticipantModal, getParticipantModal } from "../../Presentation/utils/participant-modal.utils";
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
export const createParticipant = async (formDataPromise) => {  
    const formData = await formDataPromise;
    if(formData){
        const modal = getImportParticipantModal();
        const datatable = participantStore.getParticipantDatatable();

        loadingAlert();
        for (const participant of formData) {
             await participantService.create(participant);
        }
        modal.hide();
        
        notifyAlert('Success!', `Participants has been imported successfully!`, () => {
            datatable.ajax.reload();
        });
    }

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

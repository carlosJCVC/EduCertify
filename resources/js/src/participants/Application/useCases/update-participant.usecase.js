import { loadingAlert, notifyAlert } from "../../../utils/alerts";
import ParticipantMapper from "../../Domain/mappers/participant.mapper";
import ParticipantService from "../../Infrastructure/services/participant.service";
import participantStore from "../../Infrastructure/store/participant.store";
import { getParticipantFormValues } from "../../Presentation/utils/participant-form.utils";
import { getParticipantModal } from "../../Presentation/utils/participant-modal.utils";
import { getParticipantFormValidation } from "../../Presentation/validators/participant-validator";
import { Validator } from "../../config/validator";

const participantService = new ParticipantService();

/**
 * Function to update participant
 * @param {int} id
 * @param {FormData} data
 * 
 * @return Participant participnat 
 */
export const updateParticipant = async (id) => {
    try {
        const modal = getParticipantModal();
        const datatable = participantStore.getParticipantDatatable();
        const fv = getParticipantFormValidation();//questions validator email en remote
        const status = await fv.validate();

        if (status == Validator.ValidForm) {
            const participantData = getParticipantFormValues();
            const participant = ParticipantMapper.fromFormData(participantData);

            loadingAlert();
            const newParticipant = await participantService.updateById(id, participant);
            modal.hide();

            notifyAlert('Success!', 'Participant has been updated successfully!', () => {
                datatable.ajax.reload();
            })

            return newParticipant;
        }
    } catch (error) {
        throw error;
    }
}

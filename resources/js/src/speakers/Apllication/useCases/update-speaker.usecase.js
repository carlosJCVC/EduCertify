import { loadingAlert, notifyAlert } from "../../../utils/alerts";
import SpeakerMapper from "../../Domain/mappers/speaker.mapper";
import speakerStore from "../../Infrastructure/store/speaker.store";
import { getSpeakerFormValues } from "../../Presentation/utils/speaker-form.utils";
import { getSpeakerModal } from "../../Presentation/utils/speaker-modal.utils";
import { getSpeakerFormValidation } from "../../Presentation/validators/speaker-validator";
import { Validator } from "../../config/validator";

/**
 * Function to update course
 * @param int id 
 * @return Speaker speaker 
 */
export const updateSpeaker = async (id) => {
    try {
        const modal = getSpeakerModal();
        const datatable = speakerStore.getSpeakerDatatable();
        const service = speakerStore.getSpeakerService();
        const fv = getSpeakerFormValidation();
        const status = await fv.validate();

        if (status == Validator.ValidForm) {
            const speakerData = getSpeakerFormValues();
            const speaker = SpeakerMapper.fromFormData(speakerData);

            loadingAlert();

            await service.updateById(id, speaker);
            modal.hide();

            notifyAlert('Success!', 'Speaker has been updated successfully!', () => {
                datatable.ajax.reload();
            })

            return true;
        }
    } catch (error) {
        throw error;
    }
}

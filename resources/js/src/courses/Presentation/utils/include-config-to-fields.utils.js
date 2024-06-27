import { includeDropifyToFields } from "./include-dropify-to-fields-utils"
import { includeFlatpickToFields } from "./include-flatpick-to-fields.utils"
import { includePickrToFields } from "./include-pickr-to-fields.utils"
import { includeSelect2ToFields } from "./include-select2-to-fields.utils"
import { includeSignatureToFields } from "./include-signature-to-fields.utils"
import { includeTagifyToFields } from "./include-tagify-to-fields.utils"

/**
 * add config, lib on inputs or fields 
 */
export const includeConfigToFields = async () => {
    includeFlatpickToFields()
    includeSelect2ToFields()
    await includeTagifyToFields()
}

/**
 * add config, lib on inputs or fields in preferences tab 
 */
export const includeConfigToPreferencesFields = async () => {
    includePickrToFields()
    includeDropifyToFields()
    includeSignatureToFields()
}

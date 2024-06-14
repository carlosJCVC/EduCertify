import { includeDropifyToFields } from "./include-dropify-to-fields-utils"
import { includeFlatpickToFields } from "./include-flatpick-to-fields-utils"
import { includeTagifyToFields } from "./include-tagify-to-fields-utils"

/**
 * add config, lib on inputs or fields 
 */
export const includeConfigToFields = async () => {
    includeFlatpickToFields()
    includeDropifyToFields()
    await includeTagifyToFields()
}

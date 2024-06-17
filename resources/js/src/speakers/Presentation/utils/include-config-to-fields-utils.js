
import { includeDropifyToFields } from "./include-dropify-to-fields-utils"
import { includeTagifyToFields } from "./include-tagify-to-fields-utils"

/**
 * add config, lib on inputs or fields 
 */
export const includeConfigToFields = async () => {
    includeDropifyToFields()
    await includeTagifyToFields()
}

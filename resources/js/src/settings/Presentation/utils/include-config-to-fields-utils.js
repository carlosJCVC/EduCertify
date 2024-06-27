import { includeDropifyToFields } from "./include-dropify-to-fields-utils"
import { includePickrToFields } from "./include-flatpick-to-fields.utils"
import { includeSignatureToFields } from "./include-signature-to-fields.utls.js"

/**
 * add config, lib on inputs or fields 
 */
export const includeConfigToFields = () => {
    includePickrToFields()
    includeDropifyToFields()
    includeSignatureToFields()
}

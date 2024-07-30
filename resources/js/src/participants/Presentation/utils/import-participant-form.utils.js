import * as XLSX from 'xlsx';

/**
 * Return Form Values from participant 
 * @returns FormData formData
 */
export const getParticipantDocumentValues = () => {
    const formData= getParticipantDocument();
    
    return formData;
}

/**
 * Funtion to get the participant dataJson
 * @returns {array} form
 */
const getParticipantDocument =async () => {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const dataJson = XLSX.utils.sheet_to_json(sheet);
    return dataJson;
}

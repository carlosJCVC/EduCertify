import DataTable from "datatables.net-bs5";
import participantStore from "../../Infrastructure/store/participant.store";
import { ElementSelectors } from "../../config/selectors";
import { renderDatatableEvents } from "../events/participant-events";

/**
 * Load datatable for participants
 */
export const listParticipantsUsingDataTable = () => {
    console.log('renderDatatable');

    /**
     * Tp check al options from datatable 
     * https://datatables.net/reference/option/
     */
    const options = {
        layout: {
            topStart: {
                buttons: getDatatableExportButtons()
            }
        },
        serverSide: true,
        processing: true,
        // paging: false,
        lengthChange: true,
        language: { search: '', searchPlaceholder: "Search..." },
        searching: true,
        ajax: `${import.meta.env.VITE_APP_URL}/admin/participants/json`,
        initComplete: function (settings, json) {
            const searchElement = document.querySelector("#participants-datatable_wrapper .form-control");
            searchElement.classList.remove("form-control-sm");

            // const filterElement = document.querySelector("#participants-datatable_wrapper .form-select");
            // filterElement.classList.remove("form-select-sm");
        },
        drawCallback: function (settings) {
            renderDatatableEvents();
        },
        /// https://datatables.net/reference/option/columns
        columns: [
            { "data": "name", "name": "name", "title": "First Name", "orderable": true, "searchable": true },
            { "data": "email", "name": "email", "title": "Email", "orderable": true, "searchable": true },
            { "data": "birthdate", "name": "birthdate", "title": "Birthdate", "orderable": true, "searchable": true },
            { "data": "status", "name": "status", "title": "Status", "orderable": true, "searchable": true },
            { "data": "created_at", "name": "created_at", "title": "Created At", "orderable": true, "searchable": true },
            { "data": "actions", "name": "actions", "title": "Actions", "orderable": true, "searchable": true }
        ]
    };

    const datatable = new DataTable(ElementSelectors.ParticipantDatatable, options);
    participantStore.setParticipantDatatable(datatable);
}

/**
 * Get datatable export buttons 
 * @returns Array
 */
const getDatatableExportButtons = () => {
    return [
        {
            extend: 'pageLength',
            className: 'me-1',
        },
        {
            text: '<i class="ti ti-copy me-1"></i>Copy',
            extend: 'copy',
            className: 'me-1 btn btn-outline-secondary',
            exportOptions: {
                columns: [0, 1, 2, 3, 4]
            }
        },
        {
            text: '<i class="ti ti-file-text me-2" ></i>CSV',
            extend: 'csv',
            className: 'me-1 btn btn-outline-secondary',
            exportOptions: {
                columns: [0, 1, 2, 3, 4]
            }
        },
        {
            text: '<i class="ti ti-file-spreadsheet me-2"></i>Excel',
            extend: 'excel',
            className: 'me-1 btn btn-outline-secondary',
            exportOptions: {
                columns: [0, 1, 2, 3, 4]
            }
        },
        {
            text: '<i class="ti ti-file-code-2 me-2"></i>PDF',
            extend: 'pdf',
            className: 'me-1 btn btn-outline-secondary',
            exportOptions: {
                columns: [0, 1, 2, 3, 4]
            }
        },
        {
            text: '<i class="ti ti-printer me-2"></i>Print',
            extend: 'print',
            className: 'me-1 btn btn-outline-secondary',
            exportOptions: {
                columns: [0, 1, 2, 3, 4]
            }
        },
    ];
}

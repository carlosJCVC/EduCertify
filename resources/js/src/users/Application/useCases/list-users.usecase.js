import DataTable from "datatables.net-bs5";
import userStore from "../../Infrastructure/store/user.store";
import { ElementSelectors } from "../../config/selectors";
import { renderDatatableEvents } from "../events/user-events";
import "/resources/assets/vendor/libs/datatables-buttons-bs5/buttons.bootstrap5.scss";
import { showCreateUserModal } from "../../Presentation/utils/user-modal.utils";

/**
 * Load datatable for users
 */
export const listUsersUsingDataTable = () => {

    /**
     * Tp check al options from datatable 
     * https://datatables.net/reference/option/
     */
    const languageOptions = {
        sLengthMenu: '_MENU_',
        search: '',
        searchPlaceholder: 'Search..'
    };

    /**
     * Tp check al options from datatable 
     * https://datatables.net/reference/option/
     */
    const options = {
        dom: getDatatableDOM(),
        buttons: getDatatableButtons(),
        serverSide: false,
        processing: true,
        // paging: false,
        lengthChange: true,
        // searching: true,
        language: languageOptions,
        ajax: `${import.meta.env.VITE_APP_URL}/admin/users/json`,
        initComplete: function (settings, json) {
            const searchElement = document.querySelector("#users-datatable_wrapper .form-control");
            searchElement.classList.remove("form-control-sm");

            const filterElement = document.querySelector("#users-datatable_wrapper .form-select");
            filterElement.classList.remove("form-select-sm");
        },
        drawCallback: function (settings) {
            renderDatatableEvents();
        },
        /// https://datatables.net/reference/option/columns
        columns: getDatatableColumns()
    };

    const datatable = new DataTable(ElementSelectors.UserDatatable, options);
    userStore.setUserDatatable(datatable);
}

/**
 * Get datatable dom  
 * @returns String
 */
const getDatatableDOM = () => {
    return '<"row me-2"' +
        '<"col-md-2"<"me-3 my-2 mb-md-0"l>>' +
        '<"col-md-10"<"dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-center justify-content-end flex-md-row flex-column my-2 mb-md-0"fB>>' +
        '>t' +
        '<"row mx-2"' +
        '<"col-sm-12 col-md-6 mt-2"i>' +
        '<"col-sm-12 col-md-6 d-flex justify-content-end mt-2"p>' +
        '>';
}

/**
 * Get datatable buttons 
 * @returns Array
 */
const getDatatableButtons = () => {
    return [
        {
            extend: 'collection',
            className: 'btn btn-info dropdown-toggle rounded-lg mx-3 mb-2',
            text: '<i class="ti ti-screen-share me-2 ti-xs"></i> Export <i class="ti ti-arrow-down ms-1"></i>',
            buttons: getDatatableExportButtons()
        },
        {
            text: '<i class="ti ti-plus me-0 me-sm-1 ti-xs"></i><span class="d-none d-sm-inline-block">Create New Course</span>',
            className: 'btn-new-course btn-primary rounded-lg mb-2 btn-new-record',
            id: 'btn-new-course',
            action: () => {
                showCreateUserModal()
            }
        }
    ]
}

/**
 * Get datatable export buttons 
 * @returns Array
 */
const getDatatableExportButtons = () => {
    return [
        {
            text: '<i class="ti ti-copy me-1"></i>Copy',
            extend: 'copy',
            className: 'me-1 btn btn-outline-secondary',
            exportOptions: {
                columns: [0, 1, 3, 4]
            }
        },
        {
            text: '<i class="ti ti-file-text me-2" ></i>CSV',
            extend: 'csv',
            className: 'me-1 btn btn-outline-secondary',
            exportOptions: {
                columns: [0, 1, 3, 4]
            }
        },
        {
            text: '<i class="ti ti-file-spreadsheet me-2"></i>Excel',
            extend: 'excel',
            className: 'me-1 btn btn-outline-secondary',
            exportOptions: {
                columns: [0, 1, 3, 4]
            }
        },
        {
            text: '<i class="ti ti-file-code-2 me-2"></i>PDF',
            extend: 'pdf',
            className: 'me-1 btn btn-outline-secondary',
            exportOptions: {
                columns: [0, 1, 3, 4]
            }
        },
        {
            text: '<i class="ti ti-printer me-2"></i>Print',
            extend: 'print',
            className: 'me-1 btn btn-outline-secondary',
            exportOptions: {
                columns: [0, 1, 3, 4]
            }
        },
    ];
}

/**
 * Get datatable columns 
 * @returns Array
 */
const getDatatableColumns = () => {
    return [
        { "data": "name", "name": "name", "title": "Name", "orderable": true, "searchable": true },
        { "data": "email", "name": "email", "title": "Email", "orderable": true, "searchable": true },
        { "data": "roles", "name": "roles", "title": "Roles", "orderable": true, "searchable": true, visible: false },
        { "data": "status", "name": "status", "title": "Status", "orderable": true, "searchable": true },
        { "data": "created_at", "name": "created_at", "title": "Created At", "orderable": true, "searchable": true },
        { "data": "actions", "name": "actions", "title": "Actions", "orderable": true, "searchable": true }
    ]
}

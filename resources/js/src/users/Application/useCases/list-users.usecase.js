import DataTable from "datatables.net-bs5";
import userStore from "../../Infrastructure/store/user.store";
import { ElementSelectors } from "../../config/selectors";
import { renderDatatableEvents } from "../events/user-events";

/**
 * Load datatable for users
 */
export const listUsersUsingDataTable = () => {
    console.log('renderDatatable');

    /**
     * Tp check al options from datatable 
     * https://datatables.net/reference/option/
     */
    const options = {
        layout: {
            topStart: {
                buttons: [
                    {
                        extend: 'pageLength',
                        className: 'me-1',
                        exportOptions: {
                            columns: [0, 1, 2, 3, 4]
                        }
                    },
                    {
                        text: '<i class="ti ti-copy me-1"></i>Copy',
                        extend: 'copy',
                        className: 'me-1',
                        exportOptions: {
                            columns: [0, 1, 2, 3, 4]
                        }
                    },
                    {
                        text: '<i class="ti ti-file-text me-2" ></i>CSV',
                        extend: 'csv',
                        className: 'me-1',
                        exportOptions: {
                            columns: [0, 1, 2, 3, 4]
                        }
                    },
                    {
                        text: '<i class="ti ti-file-spreadsheet me-2"></i>Excel',
                        extend: 'excel',
                        className: 'me-1',
                        exportOptions: {
                            columns: [0, 1, 2, 3, 4]
                        }
                    },
                    {
                        text: '<i class="ti ti-file-code-2 me-2"></i>PDF',
                        extend: 'pdf',
                        className: 'me-1',
                        exportOptions: {
                            columns: [0, 1, 2, 3, 4]
                        }
                    },
                    {
                        text: '<i class="ti ti-printer me-2"></i>Print',
                        extend: 'print',
                        className: 'me-1',
                        exportOptions: {
                            columns: [0, 1, 2, 3, 4]
                        }
                    },
                ]
            }
        },
        serverSide: true,
        processing: true,
        // paging: false,
        lengthChange: true,
        searching: true,
        ajax: `${import.meta.env.VITE_APP_URL}/admin/users/json`,
        initComplete: function (settings, json) { },
        drawCallback: function (settings) {
            renderDatatableEvents();
        },
        /// https://datatables.net/reference/option/columns
        columns: [
            { "data": "name", "name": "name", "title": "Name", "orderable": true, "searchable": true },
            { "data": "email", "name": "email", "title": "Email", "orderable": true, "searchable": true },
            { "data": "roles", "name": "roles", "title": "Roles", "orderable": true, "searchable": true },
            { "data": "status", "name": "status", "title": "Status", "orderable": true, "searchable": true },
            { "data": "created_at", "name": "created_at", "title": "Created At", "orderable": true, "searchable": true },
            { "data": "actions", "name": "actions", "title": "Actions", "orderable": true, "searchable": true }
        ]
    };

    const datatable = new DataTable(ElementSelectors.UserDatatable, options);
    userStore.setUserDatatable(datatable);
}


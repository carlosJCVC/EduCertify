import $ from 'jquery';
import DataTable from "datatables.net-bs5";
import { ElementSelectors } from "../../../participants/config/selectors";
import "/resources/assets/vendor/libs/datatables-buttons-bs5/buttons.bootstrap5.scss";
import courseStore from '../../Infrastructure/store/course.store';

/**
 * Load datatable for participants
 */
export const listParticipantInCourseUsingDataTable = () => {
    $.extend(true, $.fn.dataTable.Buttons.defaults, {
        dom: {
            button: {
                className: 'btn' // Remueve 'btn-secondary' por defecto
            }
        }
    });

    /**
     * Tp check al options from datatable 
     * https://datatables.net/reference/option/
     */
    const languageOptions = {
        sLengthMenu: '_MENU_',
        search: '',
        searchPlaceholder: 'Search..'
    };

    const courseId = document.querySelector('.course-info-card')?.getAttribute('data-courseid');

    /**
     * Tp check al options from datatable 
     * https://datatables.net/reference/option/
     */
    const options = {
        dom: getDatatableDOM(),
        buttons: getDatatableButtons(),
        serverSide: true,
        processing: true,
        // paging: false,
        lengthChange: true,
        language: languageOptions,
        searching: true,
        ajax: {
            url: `${import.meta.env.VITE_APP_URL}/admin/courses/${courseId}/participants/json`,
        },
        initComplete: function (settings, json) {
            const searchElement = document.querySelector("#participants-datatable_wrapper .form-control");
            searchElement.classList.remove("form-control-sm");

            const filterElement = document.querySelector("#participants-datatable_wrapper .form-select");
            filterElement.classList.remove("form-select-sm");
        },
        drawCallback: function (settings) {
            // renderParticipantsEnrolledDatatable();
        },
        /// https://datatables.net/reference/option/columns
        columns: getDatatableColumns()
    };

    const datatable = new DataTable(ElementSelectors.ParticipantDatatable, options);
    courseStore.setParticipatnsEnrolledDatatable(datatable)
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
            className: 'btn btn-info dropdown-toggle rounded-lg ms-3 mb-2',
            text: '<i class="ti ti-screen-share ti-xs"></i> Export <i class="ti ti-arrow-down ms-1"></i>',
            buttons: getDatatableExportButtons()
        },
    ]
}

/**
 * Get datatable export buttons 
 * @returns Array
 */
const getDatatableExportButtons = () => {
    const COLUMNSTOEXPORT = [0, 1, 2, 3];

    return [
        {
            text: '<i class="ti ti-copy me-1"></i>Copy',
            extend: 'copy',
            className: 'btn',
            exportOptions: {
                columns: COLUMNSTOEXPORT
            }
        },
        {
            text: '<i class="ti ti-file-text me-2" ></i>CSV',
            extend: 'csv',
            className: 'btn',
            exportOptions: {
                columns: COLUMNSTOEXPORT
            }
        },
        {
            text: '<i class="ti ti-file-spreadsheet me-2"></i>Excel',
            extend: 'excel',
            className: 'btn',
            exportOptions: {
                columns: COLUMNSTOEXPORT
            }
        },
        {
            text: '<i class="ti ti-file-code-2 me-2"></i>PDF',
            extend: 'pdf',
            className: 'btn',
            exportOptions: {
                columns: COLUMNSTOEXPORT
            }
        },
        {
            text: '<i class="ti ti-printer me-2"></i>Print',
            extend: 'print',
            className: 'btn',
            exportOptions: {
                columns: COLUMNSTOEXPORT
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
        { "data": "name", "name": "name", "title": "Participant", "orderable": true, "searchable": true },
        { "data": "email", "name": "email", "title": "Email", "orderable": true, "searchable": true },
        { "data": "status", "name": "status", "title": "Status", "orderable": true, "searchable": true },
        { "data": "birthdate", "name": "birthdate", "title": "Birthdate", "Orderable": true, "searchable": true },
        { "data": "actions", "name": "actions", "title": "Actions", "orderable": true, "searchable": true }
    ]
}

import $ from 'jquery';
import DataTable from "datatables.net-bs5";
import { ElementSelectors } from "../../config/selectors";
import courseStore from "../../Infrastructure/store/course.store";
import { renderDatatableEvents } from "../events/course-events";
// import "/resources/sass/datatable.scss";
import "/resources/assets/vendor/libs/datatables-buttons-bs5/buttons.bootstrap5.scss";
import { showCreateCourseModal } from '../../Presentation/utils/course-modal.utils';

/**
 * Load datatable for participants
 */
export const listCoursesUsingDataTable = () => {
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
        ajax: `${import.meta.env.VITE_APP_URL}/admin/courses/json`,
        initComplete: function (settings, json) {
            const searchElement = document.querySelector("#courses-datatable_wrapper .form-control");
            searchElement.classList.remove("form-control-sm");

            const filterElement = document.querySelector("#courses-datatable_wrapper .form-select");
            filterElement.classList.remove("form-select-sm");
        },
        drawCallback: function (settings) {
            renderDatatableEvents();
        },
        /// https://datatables.net/reference/option/columns
        columns: getDatatableColumns()
    };

    const datatable = new DataTable(ElementSelectors.CourseDatatable, options);
    courseStore.setCourseDatatable(datatable);
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
                showCreateCourseModal()
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

/**
 * Get datatable columns 
 * @returns Array
 */
const getDatatableColumns = () => {
    return [
        { "data": "name", "name": "name", "title": "Name", "orderable": true, "searchable": true },
        { "data": "speaker", "name": "speaker", "title": "Speaker", "orderable": true, "searchable": true },
        { "data": "categories", "name": "categories", "title": "Category", "orderable": true, "searchable": true },
        { "data": "level", "name": "level", "title": "level", "Orderable": true, "searchable": true },
        { "data": "start_date", "name": "start_date", "title": "Start date", "orderable": true, "searchable": true },
        { "data": "end_date", "name": "end_date", "title": "End date", "orderable": true, "searchable": true },
        { "data": "actions", "name": "actions", "title": "Actions", "orderable": true, "searchable": true }
    ]
}
import './bootstrap';
import * as bootstrap from "bootstrap";

// import DataTable from 'datatables.net-bs5';
// window.DataTable = DataTable

/**
 * Import datatable libs for export
 */
import jszip from 'jszip';
import pdfmake from 'pdfmake/build/pdfmake';
import vfs_fonts from 'pdfmake/build/vfs_fonts';
import 'datatables.net-buttons-bs5';
import 'datatables.net-buttons/js/buttons.colVis.mjs';
import 'datatables.net-buttons/js/buttons.html5.mjs';
import 'datatables.net-buttons/js/buttons.print.mjs';

pdfMake.vfs = vfs_fonts.pdfMake.vfs;

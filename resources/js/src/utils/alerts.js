import Swal from 'sweetalert2'

/**
 * Displaying Message with swal2
 *
 * @param {string} title
 * @param {string} message
 * @param {string} type
 */
export const confirmAlert = (title, message, callback = null) => {
  Swal.fire({
    title: title,
    html: message,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, continue',
    cancelButtonText: 'No, cancel!',
    reverseButtons: true,
    customClass: {
      confirmButton: 'btn btn-primary m-3',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  }).then(callback);
};

/**
 * Confirmation sweetalert
 *
 * @param {string} title
 * @param {string} message
 * @param {string} type
 */
export const notifyAlert = (title, message, callback = null) => {
  Swal.fire({
    title: title,
    text: message,
    icon: 'success',
    showCancelButton: false,
    confirmButtonText: 'Ok',
    customClass: {
      confirmButton: 'btn btn-primary',
    }
  }).then(callback);
};

/**
 * Function to display loading
 */
export const loadingAlert = () => {
  Swal.fire({
    title: 'Please Wait !',
    html: 'Processing ...',
    allowOutsideClick: false,
    customClass: {
      confirmButton: 'btn btn-label-primary d-none'
    },
    didOpen: () => {
      Swal.showLoading();
    }
  });
};

/**
 * Fail sweetalert
 *
 * @param {string} title
 * @param {string} message
 * @param {string} type
 */
export const failAlert = (title, message, callback = null) => {
  Swal.fire({
    title: title,
    text: message,
    icon: 'error',
    showCancelButton: false,
    confirmButtonText: 'Ok',
    customClass: {
      confirmButton: 'btn btn-primary',
    }
  }).then(callback);
};
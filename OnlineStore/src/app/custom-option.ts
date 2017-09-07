import {ToastOptions} from 'ng2-toastr';

export class CustomOption extends ToastOptions {

    containerId: 'toast-container';
    target: 'body';
    showCloseButton: true;
    positionClass: 'toast-top-center';
    toastLife: 2000;
    showMethod: 'fadeIn';
    hideMethod: 'fadeOut';
    preventDuplicates: true;
    preventOpenDuplicates: false;
}

import {body} from './index';

//------- Function to upply multiple Event Listeners to every item in array----------

export function setMultipleEvLi(array, target) {
    for (let item of array) {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            let modalWindow;
            let modalObj;

            if (target === 'target') {
                modalWindow = document.querySelector(event.target.getAttribute('data-modal'));
                modalObj = new ModalObj(event.target, modalWindow);
            } else {
                modalWindow = document.querySelector(event.currentTarget.getAttribute('data-modal'));
                modalObj = new ModalObj(event.currentTarget, modalWindow);
            }

            modalObj.showModal();
        });
    }
}

//-----------------------class to show/hide modal windows--------------------

export class ModalObj {
    constructor(target, window) {
        this.target = target;
        this.window = window;
    }

    showModal() {
        this.window.classList.add('show');
        body.classList.add('no-scroll');
        this.addCloseELs();
    }

    addCloseELs() {
        let button = document.querySelector(this.target.getAttribute('data-modal') + '_close');

        button.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelectorAll('.modal').forEach(item => {
                item.classList.remove('show');
                body.classList.remove('no-scroll');
            });
        });

        this.window.firstElementChild.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
        });

        body.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelectorAll('.modal').forEach(item => {
                item.classList.remove('show');
                body.classList.remove('no-scroll');
            });
        });
    }
    hideModal() {
        document.querySelectorAll('.modal').forEach(item => {
            item.classList.remove('show');
            body.classList.remove('no-scroll');
        });
    }
}
import { handleOpenModal, handleCloseModal } from './modal-event-handlers.js';

export function attachEventListeners() {



    document.addEventListener('click', (event) => {

        const target = event.target;


        if (target.classList.contains('open-modal-btn')) {
            const modalId = target.getAttribute('data-modal-id');
            handleOpenModal(modalId);
        }


        if (target.classList.contains('close-modal-btn')) {
            const modal = target.closest('.modal-container');
            handleCloseModal(modal);
        }

        if (target.classList.contains('task-holder') || target.classList.contains('task-title')){
            target.closest('.task-giant-item').classList.toggle('expanded');
        }
    });
}

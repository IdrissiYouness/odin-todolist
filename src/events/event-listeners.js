import { handleOpenModal, handleCloseModal} from './modal-event-handlers.js';

export function attachEventListeners(){

    document.addEventListener('click',(event)=>{

        const target = event.target;

        if (target.classList.contains('open-modal-btn')){
            const modalId = target.getAttribute('data-modal-id');
            handleOpenModal(modalId)
        }
    })
}
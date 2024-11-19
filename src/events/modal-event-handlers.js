export function handleOpenModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
    }
}

export function handleCloseModal(modal) {
    if (modal) {
        modal.style.display = 'none';
    }
}
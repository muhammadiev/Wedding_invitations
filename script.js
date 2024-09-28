document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.invitation-container');
    container.style.opacity = 0;
    setTimeout(() => {
        container.style.transition = 'opacity 1.5s ease-in';
        container.style.opacity = 1;
    }, 500);
});

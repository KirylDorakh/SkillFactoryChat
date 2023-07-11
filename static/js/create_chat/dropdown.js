const selectBtn = document.querySelector('.create-chat-header')
const createForm = document.querySelector('.create-chat')

selectBtn.addEventListener('click', () => {
    createForm.classList.toggle('open');
})
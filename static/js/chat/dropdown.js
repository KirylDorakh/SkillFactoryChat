const changeNameBtn = document.querySelector('.change-chat-name-header')
const changeMembersBtn = document.querySelector('.change-members-header')
const editName = document.querySelector('.username-container')
const editMembers = document.querySelector('.members-container')
changeNameBtn.addEventListener('click', () => {
    editName.classList.toggle('open');
})

changeMembersBtn.addEventListener('click', () => {
    editMembers.classList.toggle('open');
})
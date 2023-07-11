function usersListGroupChat(users){
    users.forEach(user => {
        const option = document.createElement('option')
        option.classList.add('user-option')
        option.value = `${user.id}`
        option.textContent = user.username
        chatUsers.insertAdjacentElement('beforeend', option)
    })
}
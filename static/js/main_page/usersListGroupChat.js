function usersListGroupChat(users){
    users.forEach(user => {
        if (user.id !== +loginUser.id){
            const option = document.createElement('option')
            option.classList.add('user-option')
            option.value = `${user.id}`
            option.textContent = user.username
            chatUsers.insertAdjacentElement('beforeend', option)
        }
    })
}

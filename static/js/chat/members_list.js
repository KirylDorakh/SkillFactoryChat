// chat_info
async function getChatInfo(membersUrl){
    try {
        const response = await fetch(membersUrl)
        if (response.ok){
            return await response.json()
        } else {
            console.log(response.status)
        }
    } catch (e) {
        console.error(e)
    }
}

// members_list
async function getMembers(data){
    return data.members
}

// users_list
async function getUsers(usersUrl){
    try {
        const response = await fetch(usersUrl)
        if (response.ok){
            return response.json()
        } else {
            console.log(response.status)
        }
    } catch (e) {
        console.error(e)
    }
}

// show List
function showInfo(members, users_data){
    return users_data.then(users => {
        users.forEach(user => {
            if (user.id !== +loginUser.id){
                const item = document.createElement('li')
                item.classList.add('user')
                item.id = `${user.id}`
                item.innerHTML = `<span class="checkbox"><img class="checkbox-icon" src="../../static/images/check.png" 
                                                              alt="checkbox"></span>
                              <span>${user.username}</span>`
                members_list.insertAdjacentElement('afterbegin', item)
            }
        })
        const userItems = document.querySelectorAll('.user')
        userItems.forEach(item => {
            if (members.includes(+item.id)){
                item.classList.toggle("checked")
            }
        })
        return userItems
    })
}

function checkedUsersList(usersList){
    usersList.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle("checked")
        })
    })
}

// загрузка страницы
document.addEventListener('DOMContentLoaded', () => {
    getChatInfo(getPutDeleteURL)
        .then(response => getMembers(response))
        .then(members => showInfo(members, getUsers(usersUrl)))
        .then(usersList => checkedUsersList(usersList))
        .catch(e => console.error(e))
})
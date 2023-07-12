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
    users_data.then(users => console.log(users, members))
}

// загрузка страницы
document.addEventListener('DOMContentLoaded', () => {
    const members = getChatInfo(getPutDeleteURL)
        .then(response => getMembers(response))
        .then(members => showInfo(members, getUsers(usersUrl)))
        .catch(e => console.error(e))

})
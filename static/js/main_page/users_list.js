
// запрос к списку всех юзеров
async function getUsers(usersUrl){
    try {
        const response = await fetch(usersUrl)
        if (response.ok){
            return await response.json()
        } else {
            console.log(response.status)
        }
    } catch (e) {
        console.error(e)
    }
}


// создание списка юзеров с ссылкой на личный чат
// если линый чат не был создан, переход на страницу для созадния чата
async function createUserList(users){
    const userChatData =[]
    for (const user of users) {
        if (user.id !== +loginUser.id) {
            let chatData = await getChatUrl(user)
            if (!chatData[0]) {
                // новый чат с новым юзером
                chatData = [await createPrivateChat(user)]
            }
            userChatData.push({user, chatData})
        }
    }

    try {
        // вывод информации на страницу
        for (const {user, chatData} of userChatData){
            await getChatInfo(user, chatData[0])
        }
    } catch(error){
        console.log(error)
    }
    return users
}


// поиск приватного чата с юзером
async function getChatUrl(user){
    try {
        const response = await fetch(chatsUrl+`?members=${loginUser.id}&members=${user.id}`)
        if (response.ok){
            return await response.json()
        // если список приватных чатов пустой, создать чат с опрошеным юзером
        } else if(response.status === 404) {
            // запрос с учатсниками чата возвращает массив, поэтому и здесь возращается массив с результатом
            // выполнения функции
            return [await createPrivateChat(user)]
        } else {
            console.log('Error: ', response.status)
        }
    } catch (e) {
        console.error(e)
    }
}


// загрузка страницы
document.addEventListener('DOMContentLoaded', () => {
    getUsers(usersUrl)
        .then(usersData => createUserList(usersData))
        .then(usersData => usersListGroupChat(usersData))
        .catch(e => console.error(e))
})
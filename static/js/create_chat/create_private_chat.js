
// создание приватного чата для списка юзеров
async function createPrivateChat(user) {
    const formData = new FormData()
    formData.append("author", loginUser.id)
    formData.append("title", `Private chat: ${loginUser.dataset.username}, ${user.username}`)
    formData.append("members", loginUser.id)
    formData.append("members", user.id)
    formData.append("private", true)

    const chatInit = {
        method: 'POST',
        headers: {
            'X-CSRFToken': csrfToken
        },
        body: formData
    }
    try {
        const response = await fetch(createUrl, chatInit)
        if (response.ok){
            return await response.json()
        } else {
            console.log(response.status)
        }
    } catch (e) {
        console.error(e)
    }
}
const editNameForm = document.querySelector('.change-chat-name')
const chatName = document.querySelector('.chat-name')

async function editChatName(editUrl, initData){
    try {
        const response = await fetch(editUrl, initData)
        return response.json()
    } catch (e) {
        console.error(`Error: ${e}`)
    }
}

async function refreshPage(data){
    try {
        await data.then(chat => {
            chatName.innerHTML = `${chat.title}`
        })
    } catch (e){
        console.error(`Error: ${e}`)
    }
}

editNameForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    const myInit = {
        method: 'PUT',
        headers: {
            'X-CSRFToken': `${formData.get('csrfmiddlewaretoken')}`
        },
        body: formData
    }

    const response = editChatName(getEditChatNameUrl, myInit)
    refreshPage(response)
})
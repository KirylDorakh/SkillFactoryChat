async function createGroupChat(url, initData){
    try {
        const response = await fetch(createUrl, initData)
        if (response.ok){
            return await response.json()
        } else {
            console.log(response.status)
        }
    } catch (e) {
        console.error(e)
    }
}

async function updateGroupChatsList(newChat){
    const container = document.createElement('div')
    container.innerHTML = `<a href="http://127.0.0.1:8000/chat/${newChat.id}">
                               <div class="chat">
                                   <h2>${newChat.title}</h2>
                                   <div>
                                        <p>Chat participants: ${newChat.members.length}</p>
                                   </div>
                               </div>
                           </a>`
    groupChatsList.insertAdjacentElement('afterbegin', container)
}

createForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)

    formData.append("members", loginUser.id)
    formData.append("author", loginUser.id)
    formData.append("private", false)

    const chatInit = {
        method: 'POST',
        headers: {
            'X-CSRFToken': csrfToken
        },
        body: formData
    }

    createGroupChat(createUrl, chatInit)
        .then(newChat => updateGroupChatsList(newChat))
        .catch(err => console.error(err))
})
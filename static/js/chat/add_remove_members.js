const edit_members = document.querySelector('.edit-members')

function getUpdatedMembersList(author){
    const members_list = document.querySelectorAll('.checked')
    const members = [author]
    members_list.forEach(member => {
        members.push(+member.id)
    })
    return members
}

function createMembersInit(members_list){
    const formData = new FormData()
    members_list.forEach(member => {
        formData.append("members", member)
    })

    return {
        method: 'PUT',
        headers: {
            'X-CSRFToken': csrfToken
        },
        body: formData
    }


}

async function editChatMembers(members_init) {
    try{
        const response = await fetch(getEditMembersUrl, members_init)
        if (response.ok){
            return response.json()
        }
    }catch (e) {
        console.error(e)
    }
}

function updateInfoOnPage(new_members){
    const members_container = document.querySelector('.members-name')
    members_container.innerText = `${new_members.members.length}`
}

edit_members.addEventListener('click', () => {
    getChatInfo(getPutDeleteURL)
        .then(data => data.author)
        .then(author => getUpdatedMembersList(author))
        .then(members => createMembersInit(members))
        .then(members_init => editChatMembers(members_init))
        .then(new_members => updateInfoOnPage(new_members))
        .catch(err => console.error(err))
})
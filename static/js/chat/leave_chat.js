const leaveBtn = document.querySelector('.leave')

function removeUserFromMemberList(data) {
    const newMembersList = []
    data.members.forEach(member => {
        if (member !== +loginUser.id){
            newMembersList.push(member)
        }
    })
    return newMembersList
}

leaveBtn.addEventListener('click', () => {
    getChatInfo(getPutDeleteURL)
        .then(data => removeUserFromMemberList(data))
        .then(members => createMembersInit(members))
        .then(members_init => editChatMembers(members_init))
        .then(new_members => window.location.href = mainPageUrl)
        .catch(err => console.error(err))
})
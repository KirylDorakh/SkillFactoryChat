const members_list = document.querySelector('.members-list')

const chatUrl = document.location.href

const changeUrl = url => {
    return url.replace(/chat/, 'api/chat')
}

const editChatNameUrl = url => {
    return url.replace(/chat/, 'api/chat/title')
}

const editMembersUrl = url => {
    return url.replace(/chat/, 'api/chat/members')
}

// get API link
const getPutDeleteURL = changeUrl(chatUrl)
const getEditChatNameUrl = editChatNameUrl(chatUrl)
const getEditMembersUrl = editMembersUrl(chatUrl)

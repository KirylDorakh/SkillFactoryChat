const chatInfo = document.querySelector('.chat-info')

const chatUrl = document.location.href

const changeUrl = url => {
    return url.replace(/chat/, 'api/chat')
}

const editUrl = url => {
    return url.replace(/chat/, 'api/chat/title')
}

// get API link
const getPutDeleteURL = changeUrl(chatUrl)
const getEditChatNameUrl = editUrl(chatUrl)

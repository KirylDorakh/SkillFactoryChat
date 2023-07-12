// Private Chat variables
const list = document.querySelector('.list-users')
const loginUser = document.querySelector('.nav-username')
const chatUsers = document.querySelector('#members')

// create Group Chat variables
const selectBtn = document.querySelector('.create-chat-header')
const createForm = document.querySelector('.create-chat')
const groupChatsList = document.querySelector('.list-chats')

// csrf token
const csrfToken = document.cookie.split('; ')
    .find(row => row.startsWith('csrftoken='))
    .split('=')[1];

// links
usersUrl = 'http://127.0.0.1:8000/api/users/'
chatsUrl = 'http://127.0.0.1:8000/api/privatechats/'
createUrl = 'http://127.0.0.1:8000/api/'
mainPageUrl = 'http://127.0.0.1:8000/'

// edit forms
const openForm = document.querySelector('.open-form')
const formName = document.querySelector('.change-name')
const username = document.querySelector('.current-username')
const usernameNav = document.querySelector('.nav-username')

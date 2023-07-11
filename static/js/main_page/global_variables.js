const list = document.querySelector('.list-users')
const loginUser = document.querySelector('.nav-username')
const newGroupChat = document.querySelector('.create_chat')
const chatUsers = document.querySelector('#members')

const csrfToken = document.cookie.split('; ')
    .find(row => row.startsWith('csrftoken='))
    .split('=')[1];

usersUrl = 'http://127.0.0.1:8000/api/users/'
chatsUrl = 'http://127.0.0.1:8000/api/privatechats/'
createUrl = 'http://127.0.0.1:8000/api/'

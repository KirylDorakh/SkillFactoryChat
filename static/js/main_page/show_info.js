// вставка юзера с ссылкой на приватный чат с ним на страницу
function getChatInfo(user, chat) {
    const container = document.createElement('div')
    container.classList.add('user')
    container.innerHTML = `<a class="chat-link"
                                          href="http://127.0.0.1:8000/chat/${chat.id}"
                                          title="Write message">
                                          <img class="avatar" src="${user.avatar}" alt="avatar">
                                          <p>${user.username}</p>
                                       </a>`
    list.insertAdjacentElement('beforeend', container)
}
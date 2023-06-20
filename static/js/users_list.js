const list = document.querySelector('.list-users')

usersUrl = 'http://127.0.0.1:8000/api/users/'


const showUsers = (usersUrl) => {
    const result = fetch(usersUrl)
        .then(response => response.json())
        .then(data => {
            data.forEach(user => {
                const container = document.createElement('div')
                container.classList.add('user')
                console.log(`${user.avatar}`)
                container.innerHTML = `<a href="#" title="Write message">
                                          <img class="avatar" src="${user.avatar}" alt="avatar">
                                          <p>${user.username}</p>
                                       </a>`
                list.insertAdjacentElement('beforeend', container)
            })
        })
}


document.addEventListener('DOMContentLoaded', () => {
    showUsers(usersUrl);
})
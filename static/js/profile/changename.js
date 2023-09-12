const changeNameUrl = url => {
    return url.replace(/accounts\/profile/, 'api/users/username')
}

const urlNameAPI = changeNameUrl(urlPage)

openForm.addEventListener('click', () => {
    formName.style.display = 'flex'
})

async function changeName(url, data) {
    try {
        const response = await fetch(url, data)
        return await response.json()
    } catch (e) {
        console.error(`Error: ${e}`)
    }
}

async function currentName(data) {
    try {
        await data.then(name => {
            usernameNav.innerHTML = `Hi, ${name.username}! ▼`
            username.innerHTML = `<span>Username:</span> ${name.username}`
        })
    } catch (e){
        console.error(`Error: ${e}`)
    }
}

formName.addEventListener('submit', (e) => {
    e.preventDefault()

    const usernamePattern = /^[a-zA-Z0-9@/./+/-/_]+$/;
    const name = document.getElementById('username').value

    if(!usernamePattern.test(name)){
        console.log(name)
        alert('Enter a valid username. This value may contain only letters, numbers, and @/./+/-/_ characters.', name)
        return;
    }

    const formData = new FormData(e.target)

    const myInit = {
        method: 'PUT',
        headers: {
            'X-CSRFToken': `${formData.get('csrfmiddlewaretoken')}`
        },
        body: formData
    }

    const result = changeName(urlNameAPI, myInit)
    currentName(result)
    formName.style.display = 'none'
    e.target.reset()
})
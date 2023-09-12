const deleteBtn = document.querySelector('.delete')

deleteBtn.addEventListener('click', ()=>{
    fetch(getPutDeleteURL, {
        method: 'DELETE',
        headers: {
            'X-CSRFToken': csrfToken
        }
    })
        .then(response => {
            if(response.ok) {
                window.location.href = mainPageUrl
            } else {
                console.log(response.status)
            }
        })
        .catch(err => console.error(err))
})
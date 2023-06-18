const urlPage = document.URL;
const formImg = document.querySelector('.change-img')
const img = document.querySelector('.avatar')

let changeUrl = url => {
    return url.replace(/accounts\/profile/, 'api/users/avatar')
}

const urlAPI = changeUrl(urlPage)

function putImg(url, data){
    return fetch(url, data)
        .then(response => {
            if (response.ok){
                return response.json()
            } else {
                throw new Error('File upload failed');
            }
        })
        .catch(err => console.error('Error uploading file:', err));
}

function uploadImg(newImg){
     newImg.then(data => {
         img.src = data.avatar
    })
}


formImg.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target)
    const fileField = document.querySelector('#image')
    formData.append('avatar', fileField.files[0])

    const myInit = {
        method: 'PUT',
        headers: {
            // 'Content-Type': 'multipart/form-data',
            'X-CSRFToken': `${formData.get('csrfmiddlewaretoken')}`
        },
        body: formData
    }
    const result = putImg(urlAPI, myInit)
    uploadImg(result)
})
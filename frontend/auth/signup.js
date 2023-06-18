const signupUrl = 'http://127.0.0.1:8000/api/dj-rest-auth/registration/'
const formLogin = document.querySelector('.auth')

function postLogin(url, data){
    return fetch(url, data)
        .then(response => {
            console.log(response)
            if (response.ok){
                return response.json()
            } else {
                console.log('error')
            }
        })
        .catch(err => console.log(err))
}


formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target)
    // const name = document.getElementById('username').value
    // const pass = document.getElementById('password').value
    const bodyData = new URLSearchParams(formData);

    const myInit = {
        method: 'POST',
        // headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded'
        // },
        body: bodyData
    }
    const token = postLogin(signupUrl, myInit)
    token.then(data => console.log(data))
})
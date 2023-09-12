const roomName = JSON.parse(document.getElementById('room-name').textContent);
const chatWindow = document.querySelector('.chat-window')


const chatSocket = new WebSocket(
    'ws://'
    + window.location.host
    + '/ws/chat/'
    + roomName
    + '/'
);

document.addEventListener('DOMContentLoaded', () => {
    chatWindow.scrollTop = chatWindow.scrollHeight;
})

function setMessageInChat(sender, message, time, avatar, sender_id) {
    const container = document.createElement('div')
    container.classList.add('chat-message-container')
    if (sender_id !== +loginUser.id) {
        container.innerHTML = `<p class="chat-message-sender-left">${sender}</p>
                               <div class="chat-message lighter">
                                   <p class="chat-message-text">${message}</p>
                                   <img class="avatar" src="${avatar}" alt="avatar">
                                   <span class="time right">${time}</span>
                               </div>`
    } else {
        container.innerHTML = `<p class="chat-message-sender">${sender}</p>
                               <div class="chat-message">
                                   <p class="chat-message-text">${message}</p>
                                   <img class="avatar" src="${avatar}" alt="avatar">
                                   <span class="time">${time}</span>
                               </div>`
    }
    chatWindow.insertAdjacentElement('beforeend', container)
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

chatSocket.onmessage = function(e) {
    const data = JSON.parse(e.data);
    setMessageInChat(data.sender, data.message, data.message_time, data.sender_img, data.sender_id)
};

chatSocket.onclose = function(e) {
    console.error('Chat socket closed unexpectedly', e.code, e.reason);
};

document.querySelector('#chat-message-input').focus();
document.querySelector('#chat-message-input').onkeyup = function(e) {
    if (e.key === 'Enter') {  // enter, return
        document.querySelector('#chat-message-submit').click();
    }
};

document.querySelector('#chat-message-submit').onclick = function(e) {
    const messageInputDom = document.querySelector('#chat-message-input');
    const message = messageInputDom.value;
    chatSocket.send(JSON.stringify({
        'message': message
    }));
    messageInputDom.value = '';
};
import json
from asgiref.sync import sync_to_async

from channels.generic.websocket import AsyncWebsocketConsumer

from .models import Message, Chat
from accounts.models import CustomUser

def save_message(chat_id):
    chat = Chat.objects.get(id=chat_id)
    print(chat)


class ChatConsumer(AsyncWebsocketConsumer):
    @sync_to_async
    def get_chat(self, chat_id):
        return Chat.objects.get(id=chat_id)

    @sync_to_async
    def get_sender(self, sender_name):
        return CustomUser.objects.get(username=sender_name)

    @sync_to_async
    def save_message(self, chat, sender, message):
        chat_message = Message(chat=chat, user=sender, message_text=message)
        chat_message.save()
        return chat_message


    async def connect(self):
        self.room_name = self.scope["url_route"]["kwargs"]["room_name"]
        self.room_group_name = f"chat_{self.room_name}"

        # Join room group
        await self.channel_layer.group_add(self.room_group_name, self.channel_name)

        await self.accept()

    async def disconnect(self, close_code):
        # Leave room group
        await self.channel_layer.group_discard(self.room_group_name, self.channel_name)

    # Receive message from WebSocket
    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json["message"]
        sender_name = self.scope['user']
        chat_id = self.scope["url_route"]["kwargs"]["room_name"]

        sender = await self.get_sender(sender_name)
        chat = await self.get_chat(chat_id)
        chat_message = await self.save_message(chat=chat, sender=sender, message=message)

        # Send message to room group
        await self.channel_layer.group_send(
            self.room_group_name, {
                "type": "chat.message",
                "message": message,
                "sender_name": sender.username,
                "sender_img": sender.avatar.url,
                "sender_id": sender.id,
                "message_time": chat_message.message_time.strftime('%I:%M %p, %d.%m.%Y')
            }
        )

    # Receive message from room group
    async def chat_message(self, event):
        message = event["message"]
        sender_name = event["sender_name"]
        message_time = event["message_time"]
        sender_img = event["sender_img"]
        sender_id = event["sender_id"]

        # Send message to WebSocket
        await self.send(text_data=json.dumps({
            "message": message,
            "sender": sender_name,
            "message_time": message_time,
            "sender_img": sender_img,
            "sender_id": sender_id
        }))

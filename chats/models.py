from django.db import models
from accounts.models import CustomUser


class Chat(models.Model):
    title = models.CharField(max_length=64)
    members = models.ManyToManyField(CustomUser)

    def __str__(self):
        return self.title


class Message(models.Model):
    chat = models.ForeignKey(Chat,
                             on_delete=models.CASCADE,
                             related_name='message'
                             )
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    message_text = models.TextField()
    message_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.message_text[:15]+'...'

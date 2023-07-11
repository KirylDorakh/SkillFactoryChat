from django.db import models
from accounts.models import CustomUser

from django.urls import reverse

from django.contrib.auth import get_user_model


class Chat(models.Model):
    title = models.CharField(max_length=64)
    members = models.ManyToManyField(get_user_model(),
                                     related_name='members')
    author = models.ForeignKey(get_user_model(),
                               on_delete=models.CASCADE,
                               related_name='author')

    private = models.BooleanField(default=False)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('chat', args=[str(self.id)])


class Message(models.Model):
    chat = models.ForeignKey(Chat,
                             on_delete=models.CASCADE,
                             related_name='message'
                             )
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    message_text = models.CharField(max_length=512)
    message_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user.username}: {self.message_text} [{self.message_time}]'

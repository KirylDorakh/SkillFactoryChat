from django.db import models
from django.urls import reverse
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    avatar = models.ImageField(upload_to='images', default='images/avatar.svg')

    def get_absolute_url(self):
        return reverse('profile', args=[str(self.id)])

    def __str__(self):
        return self.username

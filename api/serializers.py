from rest_framework import serializers
from chats.models import Chat
from django.contrib.auth import get_user_model


class ChatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chat
        fields = ('id','title', 'members')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ['id', 'username', 'email', 'avatar']

class AvatarUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ['avatar']

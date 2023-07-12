from rest_framework import serializers
from chats.models import Chat
from django.contrib.auth import get_user_model


class ChatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chat
        fields = ('id', 'author', 'title', 'members', 'private')


class ChatNameUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chat
        fields = ['title']


class ChatMembersUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chat
        fields = ['members']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ['id', 'username', 'email', 'avatar']


class AvatarUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ['avatar']


class UsernameUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ['username']

from rest_framework import generics

from chats.models import Chat
from django.contrib.auth import get_user_model

from .serializers import ChatSerializer, UserSerializer, AvatarUpdateSerializer

# from .permissions import IsAuthorOrReadOnly
# permission_classes = (IsAuthorOrReadOnly,)

class ListChat(generics.ListCreateAPIView):
    queryset = Chat.objects.all()
    serializer_class = ChatSerializer


class DetailChat(generics.RetrieveAPIView):
    queryset = Chat.objects.all()
    serializer_class = ChatSerializer


class ListUser(generics.ListAPIView):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer


class DetailUser(generics.RetrieveUpdateDestroyAPIView):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer


class AvatarUpdateView(generics.UpdateAPIView):
    serializer_class = AvatarUpdateSerializer
    queryset = get_user_model().objects.all()
